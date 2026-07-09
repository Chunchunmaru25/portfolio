import { prisma } from '../../database/database.js';

export const addExperience = async (req, res) => {
    const {
        company,
        branch,
        position,
        startDate,
        endDate,
        description
    } = req.body;

    try {
        const newExperience = await prisma.experience.create({
            data: {
                company,
                branch,
                position,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                experienceDescriptions: {
                    create: description.map((item) => ({
                        description: item
                    }))
                }
            },
            include: {
                experienceDescriptions: true
            }
        });

        res.status(201).json({
            status: 'success',
            message: 'Experience added successfully',
            data: newExperience
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add experience',
            data: error.message
        });
    }
};

export const getExperience = async (req, res) => {
    try {
        const experience = await prisma.experience.findMany({
            include: {
                experienceDescriptions: true
            },
            orderBy: {
                startDate: 'desc'
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Experience fetched successfully',
            data: experience
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get experience',
            data: error.message
        });
    }
};

export const updateExperience = async (req, res) => {
    const { id } = req.params;

    const {
        company,
        branch,
        position,
        startDate,
        endDate,
    } = req.body;

    try {
        const updatedExperience = await prisma.experience.update({
            where: {
                id
            },
            data: {
                company,
                branch,
                position,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            },
            include: {
                experienceDescriptions: true
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Experience updated successfully',
            data: updatedExperience
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to update experience',
            data: error.message
        });
    }
};

export const deleteExperience = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.experience.delete({
            where: {
                id
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Experience deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete experience',
            data: error.message
        });
    }
};

// description
export const addExperienceDescription = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const response = await prisma.experience_description.create({
            data: {
                experienceId: id,
                description
            }
        });

        if (!response) {
            res.status(401).json({
                status: 'error',
                message: 'Failed to add description',
                data: response
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Description added successfully',
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add description',
            data: error.message
        });
    }

};

export const deleteExperienceDescription = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await prisma.experience_description.delete({
            where: {
                id
            }
        });
        if (!response) {
            res.status(401).json({
                status: 'error',
                message: 'Failed to delete description',
                data: response
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Description deleted successfully',
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete description',
            data: error.message
        });
    }
};

export const updateExperienceDescription = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const response = await prisma.experience_description.update({
            where: {
                id
            },
            data: {
                description
            }
        });
        if (!response) {
            res.status(401).json({
                status: 'error',
                message: 'Failed to update description',
                data: response
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Description updated successfully',
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to update description',
            data: error.message
        });
    }
};

