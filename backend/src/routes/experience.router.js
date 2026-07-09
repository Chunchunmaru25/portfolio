import { Router } from "express";
import {
    addExperience, getExperience, updateExperience, deleteExperience,
    addExperienceDescription,
    deleteExperienceDescription,
    updateExperienceDescription
} from "../controllers/resume/experience.controller.js";
import authMiddleware from "../midlleware/auth.middleware.js";
const experienceRouter = Router();

experienceRouter.post("/", addExperience);
experienceRouter.get("/", getExperience);
experienceRouter.patch("/:id", updateExperience);
experienceRouter.delete('/:id', deleteExperience);

// description
experienceRouter.post("/description/:id", authMiddleware, addExperienceDescription);
experienceRouter.delete("/description/:id", authMiddleware, deleteExperienceDescription);
experienceRouter.patch("/description/:id", authMiddleware, updateExperienceDescription);
export default experienceRouter;