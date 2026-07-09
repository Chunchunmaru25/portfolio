import { Router } from "express";
import { addBackendSkill, getBackendSkill, updateBackendSkill, deleteBackendSkill } from "../controllers/skills/backendSkills.controller.js";
const backendSkillsRouter = Router();

backendSkillsRouter.post("/", addBackendSkill);
backendSkillsRouter.get("/", getBackendSkill);
backendSkillsRouter.patch("/:id", updateBackendSkill);
backendSkillsRouter.delete('/:id', deleteBackendSkill);

export default backendSkillsRouter;
