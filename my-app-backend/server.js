import dotenv from "dotenv"; // Import dotenv
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { lgaList } from "./state-lga-backend/lga.js"; // Adjust the path and add .js extension
import userRoutes from "./routes/userRoutes.js"; // Use default import

dotenv.config(); // Load environment variables at the top

if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the .env file");
  process.exit(1); // Exit the application if MONGO_URI is missing
}

const app = express();
app.use(express.json());
app.use(cors());

// Debugging: Check if MONGO_URI is loaded
console.log("MONGO_URI:", process.env.MONGO_URI);  // This should print the correct MongoDB URI

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Hello  Walisked");
});

// Route to fetch all states
app.get("/api/states", (req, res) => {
  try {
    const states = Object.keys(lgaList); // Get all state names
    res.status(200).json(states); // Return as an array of strings
  } catch (err) {
    res.status(500).send("Error: Unable to fetch states");
  }
});

// Route to fetch LGAs for a specific state
app.get("/api/lgas", (req, res) => {
  try {
    const state = req.query.state; // Get the state from query parameters
    if (lgaList[state]) {
      res.status(200).json(lgaList[state]); // Return LGAs for the state
    } else {
      res.status(400).send("Error: Invalid state name");
    }
  } catch (err) {
    res.status(500).send("Error: Unable to fetch LGAs");
  }
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/brm", (await import("./routes/brmRoutes.js")).default); // Dynamically import brmRoutes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
