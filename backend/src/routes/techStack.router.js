import express from "express";
import {
    addTechStack,
    getTechStack,
    updateTechStack,
    deleteTechStack,
    addTypeStack,
    updateTypeStack,
    deleteTypeStack
} from "../controllers/techStack.controller.js";

const techStackRouter = express.Router();

techStackRouter.post("/", addTechStack);
techStackRouter.get("/", getTechStack);
techStackRouter.patch("/:id", updateTechStack);
techStackRouter.delete("/:id", deleteTechStack);

techStackRouter.post("/type", addTypeStack);
techStackRouter.patch("/type/:id", updateTypeStack);
techStackRouter.delete("/type/:id", deleteTypeStack);

export default techStackRouter;