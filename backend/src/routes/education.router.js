import { Router } from "express";
import {
    addEducation, getEducation, updateEducation, deleteEducation, addEducationDescription,
    updateEducationDescription, deleteEducationDescription
} from "../controllers/resume/education.controller.js";
import authMiddleware from "../midlleware/auth.middleware.js";
const educationRouter = Router();

educationRouter.post("/", authMiddleware, addEducation);
educationRouter.get("/", getEducation); //public
educationRouter.patch("/:id", authMiddleware, updateEducation);
educationRouter.delete('/:id', authMiddleware, deleteEducation);

// description
educationRouter.post("/description/:id", authMiddleware, addEducationDescription);
educationRouter.patch("/description/:id", authMiddleware, updateEducationDescription);
educationRouter.delete("/description/:id", authMiddleware, deleteEducationDescription);


export default educationRouter;