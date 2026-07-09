import { prisma } from "../../database/database.js";

export const addBackendSkill = async (req, res) => {
    const { title, subtitle, description } = req.body;
    const progress = Number(subtitle);

    if (!Number.isFinite(progress)) {
        return res.status(400).json({
            status: "error",
            message: "Progress must be a valid number."
        });
    }
    try {
        const backendSkill = await prisma.backendSkills.create({
            data: { skills: title, progress, description }
        });

        res.status(201).json({
            status: "success",
            message: "Backend skill added successfully",
            data: backendSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to add backend skill",
            data: error.message
        });
    }
};

export const getBackendSkill = async (req, res) => {
    try {
        const backendSkills = await prisma.backendSkills.findMany();

        res.status(200).json({
            status: "success",
            message: "Backend skills fetched successfully",
            data: backendSkills
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch backend skills",
            data: error.message
        });
    }
};

export const updateBackendSkill = async (req, res) => {
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
        const backendSkill = await prisma.backendSkills.update({
            where: { id },
            data: {
                skills: title,
                progress,
                description
            }
        });

        res.status(200).json({
            status: "success",
            message: "Backend skill updated successfully",
            data: backendSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update backend skill",
            data: error.message
        });
    }
};

export const deleteBackendSkill = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.backendSkills.delete({
            where: { id }
        });

        res.status(200).json({
            status: "success",
            message: "Backend skill deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete backend skill",
            data: error.message
        });
    }
};