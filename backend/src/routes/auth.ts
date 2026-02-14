import { Router } from "express";
import { register, login, me } from "../controllers/auth";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, me);
console.log("Auth routes loaded");
export default router;
