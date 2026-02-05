import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./authRoutes.js";
import { verifyToken } from "./middleware/authMiddleware.js";

console.log("THIS IS MY SERVER FILE");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
