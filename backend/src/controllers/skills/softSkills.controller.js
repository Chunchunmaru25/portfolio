import { prisma } from "../../database/database.js";

export const addSoftSkill = async (req, res) => {
    const { title, subtitle, description } = req.body;
    const progress = Number(subtitle);

    if (!Number.isFinite(progress)) {
        return res.status(400).json({
            status: "error",
            message: "Progress must be a valid number."
        });
    }

    try {
        const softSkill = await prisma.softSkills.create({
            data: { skills: title, progress, description }
        });

        res.status(201).json({
            status: "success",
            message: "Soft skill added successfully",
            data: softSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to add soft skill",
            data: error.message
        });
    }
};

export const getSoftSkills = async (req, res) => {
    try {
        const softSkills = await prisma.softSkills.findMany();

        res.status(200).json({
            status: "success",
            message: "Soft skills fetched successfully",
            data: softSkills
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch soft skills",
            data: error.message
        });
    }
};

export const updateSoftSkill = async (req, res) => {
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
        const softSkill = await prisma.softSkills.update({
            where: { id },
            data: {
                skills: title,
                progress,
                description
            }
        });

        res.status(200).json({
            status: "success",
            message: "Soft skill updated successfully",
            data: softSkill
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update soft skill",
            data: error.message
        });
    }
};

export const deleteSoftSkill = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.softSkills.delete({
            where: { id }
        });

        res.status(200).json({
            status: "success",
            message: "Soft skill deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete soft skill",
            data: error.message
        });
    }
};