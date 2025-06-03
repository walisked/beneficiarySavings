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
router.get("/verify-email/:token", verifyEmail);
router.post("/logout", logoutUser);

export default router;