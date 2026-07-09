import { Router } from "express";
import { addSoftSkill, getSoftSkills, updateSoftSkill, deleteSoftSkill } from "../controllers/skills/softSkills.controller.js";
const softSkillsRouter = Router();

softSkillsRouter.post("/", addSoftSkill);
softSkillsRouter.get("/", getSoftSkills);
softSkillsRouter.patch("/:id", updateSoftSkill);
softSkillsRouter.delete('/:id', deleteSoftSkill);

export default softSkillsRouter;
