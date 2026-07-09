import { prisma } from '../../database/database.js';

export const addEducation = async (req, res) => {
    const { program, branch, startDate, endDate, description } = req.body;
    console.log(req.body);
    try {
        const newEducation = await prisma.education.create({
            data: {
                program,
                branch,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                educationDescriptions: {
                    create: description.map((item) => ({
                        description: item
                    }))
                }
            }
        });
        res.status(201).json({ status: 'success', message: 'Education added successfully', data: newEducation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to add education', data: error.message });
    }

}

export const getEducation = async (req, res) => {
    try {
        const education = await prisma.education.findMany({
            include: {
                educationDescriptions: true
            }, orderBy: {
                startDate: 'desc'
            }
        });
        res.status(200).json({ status: 'success', message: 'Education fetched successfully', data: education });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to get education', data: error.message });
    }
}

export const updateEducation = async (req, res) => {
    const { id } = req.params;
    const { program, branch, startDate, endDate } = req.body;
    console.log(req.params);
    console.log(req.body);
    try {
        const updatedEducation = await prisma.education.update({
            where: { id },
            data: {
                program,
                branch,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            }
        });
        res.status(200).json({ status: 'success', message: 'Education updated successfully', data: updatedEducation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to update education', data: error.message });
    }
}

export const deleteEducation = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.education.delete({
            where: { id }
        });
        res.status(200).json({ status: 'success', message: 'Education deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to delete education', data: error.message });
    }
}


// description
export const addEducationDescription = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedEducation = await prisma.education_description.create({
            data: {
                description: description,
                educationId: id,
            }
        });
        res.status(200).json({ status: 'success', message: 'Education Added successfully', data: updatedEducation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to add education', data: error.message });
    }
}

export const updateEducationDescription = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedEducation = await prisma.education_description.update({
            where: {
                id
            },
            data: {
                description: description,
            }
        });
        res.status(200).json({ status: 'success', message: 'Education Updated successfully', data: updatedEducation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to updated education', data: error.message });
    }
}

export const deleteEducationDescription = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedEducation = await prisma.education_description.delete({
            where: {
                id
            },
        });
        res.status(200).json({ status: 'success', message: 'Education Deleted successfully', data: updatedEducation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to delete education', data: error.message });
    }
}