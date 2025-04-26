const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const BRMSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "BRM" }, // Default role for a Business Relationship Manager
}, { timestamps: true });

// Hash password before saving
BRMSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("BRM", BRMSchema);
