import { Router } from "express";
import { registerUser, loginUser, validateToken } from "../controllers/auth.controller.js";
import authMiddleware from "../midlleware/auth.middleware.js";
const AuthRouter = Router();

AuthRouter.post("/register", registerUser)
AuthRouter.post("/login", loginUser)
AuthRouter.get("/validate-token", authMiddleware, validateToken)

export default AuthRouter;