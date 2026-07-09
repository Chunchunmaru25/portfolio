import { prisma } from "../../database/database.js";

export const addFrontendSkill = async (req, res) => {
    const { title, subtitle, description } = req.body;
    const progress = Number(subtitle);

    if (!Number.isFinite(progress)) {
        return res.status(400).json({
            status: "error",
            message: "Progress must be a valid number."
        });
    }
    try {
        const frontendSkill = await prisma.frontendSkills.create({
            data: { skills: title, progress, description }
        });

        res.status(201).json({
            status: "success",
            message: "Frontend skill added successfully",
            data: frontendSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to add frontend skill",
            data: error.message
        });
    }
};

export const getFrontendSkills = async (req, res) => {
    try {
        const frontendSkills = await prisma.frontendSkills.findMany();

        res.status(200).json({
            status: "success",
            message: "Frontend skills fetched successfully",
            data: frontendSkills
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch frontend skills",
            data: error.message
        });
    }
};

export const updateFrontendSkill = async (req, res) => {
    const { id } = req.params;
    const { title, subtitle, description } = req.body;

    const progress = Number(subtitle);

    if (!Number.isFinite(progress)) {
        return res.status(400).json({
            status: "error",
            message: "Progress must be a valid number."
        });
    }
    try {
        const frontendSkill = await prisma.frontendSkills.update({
            where: { id },
            data: {
                skills: title,
                progress,
                description
            }
        });

        res.status(200).json({
            status: "success",
            message: "Frontend skill updated successfully",
            data: frontendSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update frontend skill",
            data: error.message
        });
    }
};

export const deleteFrontendSkill = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.frontendSkills.delete({
            where: { id }
        });

        res.status(200).json({
            status: "success",
            message: "Frontend skill deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete frontend skill",
            data: error.message
        });
    }
};