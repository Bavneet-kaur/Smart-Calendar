import jwt from "jsonwebtoken";
import User from "../models/User";

export const authMiddleware = async (req:any, res:any, next:any) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const user = await User.findById(decoded.userId).select("-password");

    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
