import { Router } from "express";
import { addFrontendSkill, getFrontendSkills, updateFrontendSkill, deleteFrontendSkill } from "../controllers/skills/frontendSkills.controller.js";
const frontendSkillsRouter = Router();

frontendSkillsRouter.post("/", addFrontendSkill);
frontendSkillsRouter.get("/", getFrontendSkills);
frontendSkillsRouter.patch("/:id", updateFrontendSkill);
frontendSkillsRouter.delete('/:id', deleteFrontendSkill);

export default frontendSkillsRouter;
