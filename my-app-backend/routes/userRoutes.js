import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js"; // Adjust import syntax

const router = express.Router();

// Routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router; // Use default export