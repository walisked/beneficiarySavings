const express = require("express");
const router = express.Router();
const BRM = require("../models/BRM");
const bcrypt = require("bcrypt");

// ✅ CREATE - Admin Onboards a New BRM
router.post("/create", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await BRM.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const newBRM = new BRM({ username, password });
    await newBRM.save();
    res.status(201).json({ message: "BRM Created Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ - Fetch All BRMs
router.get("/all", async (req, res) => {
  try {
    const brms = await BRM.find();
    res.json(brms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE - Admin Resets a BRM's Password
router.put("/update/:id", async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await BRM.findByIdAndUpdate(req.params.id, { password: hashedPassword });
    res.json({ message: "Password Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ DELETE - Admin Removes a BRM
router.delete("/delete/:id", async (req, res) => {
  try {
    await BRM.findByIdAndDelete(req.params.id);
    res.json({ message: "BRM Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
