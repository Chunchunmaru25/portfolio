import { prisma } from '../../database/database.js';

export const addAchievement = async (req, res) => {
    const { title, subtitle, description } = req.body;

    try {
        const newAchievement = await prisma.achievements.create({
            data: {
                title,
                year: subtitle,
                description
            }
        });

        res.status(201).json({
            status: 'success',
            message: 'Achievement added successfully',
            data: newAchievement
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add achievement',
            data: error.message
        });
    }
};

export const getAchievement = async (req, res) => {
    try {
        const achievements = await prisma.achievements.findMany({
            orderBy: {
                year: 'desc'
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Achievements fetched successfully',
            data: achievements
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get achievements',
            data: error.message
        });
    }
};

export const updateAchievement = async (req, res) => {
    const { id } = req.params;
    const { title, subtitle, description } = req.body;

    try {
        const updatedAchievement = await prisma.achievements.update({
            where: {
                id
            },
            data: {
                title,
                year: subtitle,
                description
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Achievement updated successfully',
            data: updatedAchievement
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to update achievement',
            data: error.message
        });
    }
};

export const deleteAchievement = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.achievements.delete({
            where: {
                id
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Achievement deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete achievement',
            data: error.message
        });
    }
};