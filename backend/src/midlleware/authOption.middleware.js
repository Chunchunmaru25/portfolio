import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
const authOptional = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        req.user = null;
        return next();
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
    } catch (error) {
        req.user = null;
        console.log("Invalid token:", error.message);
    }

    next();
};

export default authOptional;