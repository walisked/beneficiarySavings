import express from "express";
import {
  registerUser,
  loginUser,
  resetPassword,
  verifyEmail,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/verify-email", verifyEmail); // Changed from GET to POST for email and code in the body
router.post("/logout", logoutUser);

export default router;