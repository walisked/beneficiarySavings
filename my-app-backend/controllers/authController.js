import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { generateVerificationToken } from "../utils/generateTokensetcookie.js"; // Import the token generator

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

    // Generate a verification token and expiration
    userData.verificationToken = generateVerificationToken(userData.email);
    userData.verificationTokenExpiresAt = Date.now() + 12 * 60 * 60 * 1000; // 12 hours

    // Create and save the user
    const user = await User.create(userData);

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // Return a response with the user data (excluding the password)
    res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        nin: user.nin,
        state: user.state,
        LGA: user.LGA,
        address: user.address,
        occupation: user.occupation,
        employer: user.employer,
        monthlyEarnings: user.monthlyEarnings,
        selectedInvestment: user.selectedInvestment,
        selectedContribution: user.selectedContribution,
        contributionFrequency: user.contributionFrequency,
        Bemail: user.Bemail,
        BVN: user.BVN,
        utilityBill: user.utilityBill,
        validated: user.validated,
        nextOfKin: user.nextOfKin,
        password: undefined, // Exclude the password from the response
      },
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
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.status(200).json({ message: "Login successful" });
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
    const { token } = req.params;

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiresAt: { $gt: Date.now() }, // Ensure token is not expired
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.isVerified = true;
    user.verificationToken = undefined; // Clear the token
    user.verificationTokenExpiresAt = undefined; // Clear the expiration
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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