import { prisma } from "../database/database.js";
const VALID_TYPES = [
    "frontend",
    "backend",
    "databaseandserver",
    "developmenttools",
    "templateanddesign",
];

export const addTechStack = async (req, res) => {
    const { stack, color, imgUrl, types } = req.body;
    console.log(req.body);
    try {
        let normalizedTypes = [];

        if (Array.isArray(types)) {
            normalizedTypes = types.map((type) =>
                String(type)
                    .trim()
                    .toLowerCase()
                    .replace(/\s+/g, "")
            );
        } else if (typeof types === "string") {
            normalizedTypes = types
                .split(",")
                .map((type) =>
                    type
                        .replace(/['"]/g, "")
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "")
                );
        } else {
            return res.status(400).json({
                status: "error",
                message: "Types must be an array or a comma-separated string.",
            });
        }

        // Remove duplicates
        normalizedTypes = [...new Set(normalizedTypes)];

        // Validate
        const invalidTypes = normalizedTypes.filter(
            (type) => !VALID_TYPES.includes(type)
        );

        if (invalidTypes.length > 0) {
            return res.status(400).json({
                status: "error",
                message: `Invalid type(s): ${invalidTypes.join(", ")}`,
            });
        }

        const techStack = await prisma.techStack.create({
            data: {
                stack,
                bgColor: color,
                imgUrl,
                techstacktype: {
                    create: normalizedTypes.map((type) => ({
                        type,
                    })),
                },
            },
            include: {
                techstacktype: true,
            },
        });

        return res.status(201).json({
            status: "success",
            message: "Tech stack added successfully",
            data: techStack,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Failed to add tech stack",
            data: error.message,
        });
    }
};

export const getTechStack = async (req, res) => {
    try {
        const techStack = await prisma.techStack.findMany({
            include: { techstacktype: true }
        });

        res.status(200).json({
            status: "success",
            message: "Tech stack fetched successfully",
            data: techStack
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch tech stack",
            data: error.message
        });
    }
};

export const updateTechStack = async (req, res) => {
    const { id } = req.params;
    const { stack, imgUrl, bgColor, svg, type } = req.body;

    try {
        const techStack = await prisma.techStack.update({
            where: { id },
            data: {
                stack,
                imgUrl,
                bgColor,
                svg,
                type
            }
        });

        res.status(200).json({
            status: "success",
            message: "Tech stack updated successfully",
            data: techStack
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update tech stack",
            data: error.message
        });
    }
};

export const deleteTechStack = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.techStack.delete({
            where: { id }
        });

        res.status(200).json({
            status: "success",
            message: "Tech stack deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete tech stack",
            data: error.message
        });
    }
};


export const addTypeStack = async (req, res) => {
    const { techStackId, type } = req.body;

    try {
        const techStackType = await prisma.techStackType.create({
            data: {
                techStackId,
                type,
            },
        });

        res.status(201).json({
            status: "success",
            message: "Type added successfully",
            data: techStackType,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to add type",
            data: error.message,
        });
    }
};

export const updateTypeStack = async (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    try {
        const techStackType = await prisma.techStackType.update({
            where: {
                id
            },
            data: {
                type,
            },
        });

        res.status(201).json({
            status: "success",
            message: "Type updated successfully",
            data: techStackType,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update type",
            data: error.message,
        });
    }
};

export const deleteTypeStack = async (req, res) => {
    const { id } = req.params;

    try {
        const techStackType = await prisma.techStackType.delete({
            where: {
                id
            },
        });

        res.status(201).json({
            status: "success",
            message: "Type deleted successfully",
            data: techStackType,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete type",
            data: error.message,
        });
    }
};