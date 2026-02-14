import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("API Running");
});

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);})

app.post("/test",(req,res) =>{
  console.log(req.body);
  res.json({message: "Test sexfully"});
})