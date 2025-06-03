import dotenv from "dotenv"; // Load environment variables at the top
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { lgaList } from "./state-lga-backend/lga.js"; // Adjust the path and add .js extension
import userRoutes from "./routes/userRoutes.js"; // Use default import
import authRoutes from "./routes/auth.js"
import path from "path"; // Import path module
dotenv.config(); // auth.js

if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the .env file");
  process.exit(1); // Exit the application if MONGO_URI is missing
}

const app = express();
app.use(express.json());
app.use(cors());

// Debugging: Check if MONGO_URI is loaded
console.log("Connecting to MongoDB...");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  })
  .then(() => {
    console.log("MongoDB Connected");
    // Start the server only after the database connection is successful
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit the application if the connection fails
  });

// Serve static files (if applicable)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Hello Walisked");
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
app.use("/api/auth", authRoutes); // Use authRoutes for authentication
app.use("/api/users", userRoutes);
app.use("/api/brm", (await import("./routes/brmRoutes.js")).default); // Dynamically import brmRoutes

// Handle unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});
