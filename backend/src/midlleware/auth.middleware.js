import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';


const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized",
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized",
            data: error.message,
        });
    }
};

export default authMiddleware;