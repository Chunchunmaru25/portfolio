import express from "express";
import {
    addPersonal,
    getPersonal,
    updatePersonal,
    deletePersonal,
    getPrivatePersonal
} from "../controllers/personal.controller.js";
import authMiddleware from "../midlleware/auth.middleware.js";
const personalRouter = express.Router();

personalRouter.get("/", getPersonal);

personalRouter.post("/", authMiddleware, addPersonal);
personalRouter.patch("/:id", authMiddleware, updatePersonal);
personalRouter.delete("/:id", authMiddleware, deletePersonal);

personalRouter.get("/private", authMiddleware, getPrivatePersonal);

export default personalRouter;