import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateVerificationToken, generateJwtToken, setTokenCookie } from "../utils/generateTokensetcookie.js"; // Import the token generator
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js"; // Import the email sending functions


// Register User
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;

    // Check if the password is provided
    if (!userData.password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Check if the email already exists
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    userData.password = await bcrypt.hash(userData.password, 10);

    // Generate verification code and expiration timestamp using the utility function
    const { verificationCode, verificationCodeExpiresAt } = generateVerificationToken();
    userData.verificationCode = verificationCode;
    userData.verificationCodeExpiresAt = verificationCodeExpiresAt;

    console.log("Generated verification code:", verificationCode);
    console.log("Code expiration:", new Date(verificationCodeExpiresAt));

    // Create and save the user
    const user = await User.create(userData);

    // Send verification email
    await sendVerificationEmail(user.email, verificationCode);

    res.status(201).json({
      message: "User registered successfully. Please check your email for the verification code.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateJwtToken(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set the token in a cookie
    setTokenCookie(res, token);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetPasswordToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordExpiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpiresAt = resetPasswordExpiresAt;
    await user.save();

    res.status(200).json({ message: "Password reset token generated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify Email
export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;

    console.log("Email provided:", email);
    console.log("Code provided:", code);

    const user = await User.findOne({ email });
    console.log("User document:", user);

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    console.log("Stored verification code:", user.verificationCode);
    console.log("Provided code (converted to number):", Number(code));

    if (user.verificationCode !== Number(code)) {
      return res.status(400).json({ success: false, message: "Invalid verification code" });
    }

    if (user.verificationCodeExpiresAt <= Date.now()) {
      return res.status(400).json({ success: false, message: "Verification code has expired" });
    }

    // Mark the user as verified
    user.isVerified = true;
    user.verificationCode = undefined; // Clear the code
    user.verificationCodeExpiresAt = undefined; // Clear the expiration
    await user.save();

    // Send welcome email
    await sendWelcomeEmail(user.email, user.username);

    // Return success response
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
        password: undefined, // Exclude password from response
      },
    });
  } catch (error) {
    console.error("Error verifying email:", error.message);
    res.status(500).json({ success: false, message: "An error occurred while verifying the email" });
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