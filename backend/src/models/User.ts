import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    timeZone: { type: String, default: "Asia/Kolkata" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
