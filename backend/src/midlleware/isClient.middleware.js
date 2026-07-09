import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import { prisma } from "../database/database.js";

const isClient = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await prisma.users.findUnique({
            where: { user_id: decoded.userId },
        });

        if (!user) {
            return res.status(401).json({
                status: "error",
                message: "User not found"
            });
        }

        if (user.role !== "user") {
            return res.status(403).json({
                status: "error",
                message: "Forbidden: Users only"
            });
        }
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized",
            error: error.message
        });
    }
};

export default isClient;