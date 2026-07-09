import { Router } from "express";
import {
    addProject, getProjects, updateProject, deleteProject, addType, addStack, deleteStack,
    deleteType, addSource, deleteSource, getPrivateProjects, getSingleProject, getSingleSource, updateSingleSource
} from "../controllers/project.controller.js";
import { upload } from "../midlleware/multer.middleware.js";
import authMiddleware from "../midlleware/auth.middleware.js";
const projectRouter = Router();

projectRouter.post("/", upload.array("images"), addProject);
projectRouter.get("/", getProjects); //public

projectRouter.get("/private", authMiddleware, getPrivateProjects); //private
projectRouter.get("/private/:id", authMiddleware, getSingleProject); //private

projectRouter.delete("/:id", authMiddleware, deleteProject);
projectRouter.patch("/:id", authMiddleware, updateProject);
projectRouter.get("/:id", authMiddleware, getSingleSource);
projectRouter.patch("/update-source/:id", authMiddleware, updateSingleSource);

projectRouter.post("/add-type", authMiddleware, addType);
projectRouter.delete("/delete-type/:id", authMiddleware, deleteType)

projectRouter.post("/add-stack", authMiddleware, addStack);
projectRouter.delete("/delete-stack/:id", authMiddleware, deleteStack)

projectRouter.post("/add-source", authMiddleware, upload.array("images"), addSource)
projectRouter.delete("/delete-source/:id", authMiddleware, deleteSource)

export default projectRouter;
