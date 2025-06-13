import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateVerificationToken, generateJwtToken, setTokenCookie } from "../utils/generateTokensetcookie.js";
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendPasswordResetSuccessEmail } from "../mailtrap/email.js";

export const registerUser = async (req, res) => {
  try {
    const userData = req.body;

    if (!userData.password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const userExists = await User.findOne({ email: userData.email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password ONLY here
    userData.password = await bcrypt.hash(userData.password, 10);

    const { verificationCode, verificationCodeExpiresAt } = generateVerificationToken();
    userData.verificationCode = verificationCode;
    userData.verificationCodeExpiresAt = verificationCodeExpiresAt;

    const user = await User.create(userData);
    try {
      await sendVerificationEmail(user.email, verificationCode);
    } catch (emailError) {
      console.error("Email sending failed, but user created:", emailError);
      // Optionally: inform the user to contact support if they don't get an email
    }
    res.status(201).json({
      message: "User registered successfully. Please check your email for verification.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use model method for consistent comparison
    const isPasswordValid = await user.matchPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateJwtToken(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    setTokenCookie(res, token);
    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // Always return success to prevent email enumeration
    if (!user) {
      return res.status(200).json({
        message: "If your email exists in our system, you'll receive a reset link"
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + parseInt(process.env.PASSWORD_RESET_EXPIRES);

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiry;
    await user.save();

    await sendPasswordResetEmail(user.email, user.username, resetToken);

    res.status(200).json({
      message: "Password reset link sent to your email"
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Error processing request", error: error.message });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token"
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    await sendPasswordResetSuccessEmail(user.email, user.username);

    res.status(200).json({
      success: true,
      message: "Password has been reset successfully"
    });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({
      success: false,
      message: "Error resetting password",
      error: error.message
    });
  }
};

// Verify Email
export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Compare as strings
    if (user.verificationCode.toString() !== code.toString()) {
      return res.status(400).json({ success: false, message: "Invalid code" });
    }

    if (user.verificationCodeExpiresAt <= Date.now()) {
      return res.status(400).json({ success: false, message: "Code expired" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.username);
    
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        id: user._id,
        email: user.email,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
};

// Logout User
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check Authentication
export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password -resetPasswordToken -resetPasswordExpiresAt -verificationCode");
    if (!user) {
      return res.status(404).json({ success: false, isAuthenticated: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      isAuthenticated: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, isAuthenticated: false, message: "Error checking authentication status" });
  }
};

// Authenticate Middleware
const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticate;