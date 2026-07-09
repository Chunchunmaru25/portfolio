import { prisma } from "../database/database.js";

export const addPersonal = async (req, res) => {
    const { key, value } = req.body;

    try {
        const personal = await prisma.personal.create({
            data: {
                key,
                value
            }
        });

        res.status(201).json({
            status: "success",
            message: "Personal information added successfully",
            data: personal
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to add personal information",
            data: error.message
        });
    }
};

export const getPersonal = async (req, res) => {
    try {
        const personal = await prisma.personal.findMany();

        res.status(200).json({
            status: "success",
            message: "Personal information fetched successfully",
            data: personal
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch personal information",
            data: error.message
        });
    }
};

export const getPrivatePersonal = async (req, res) => {
    try {
        const personal = await prisma.personal.findMany();

        res.status(200).json({
            status: "success",
            message: "Personal information fetched successfully",
            data: personal
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch personal information",
            data: error.message
        });
    }
};

export const updatePersonal = async (req, res) => {
    const { id } = req.params;
    const { key, value } = req.body;

    try {
        const personal = await prisma.personal.update({
            where: { id },
            data: {
                key,
                value
            }
        });

        res.status(200).json({
            status: "success",
            message: "Personal information updated successfully",
            data: personal
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update personal information",
            data: error.message
        });
    }
};

export const deletePersonal = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.personal.delete({
            where: { id }
        });

        res.status(200).json({
            status: "success",
            message: "Personal information deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete personal information",
            data: error.message
        });
    }
};