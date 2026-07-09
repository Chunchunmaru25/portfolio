
import { prisma } from '../database/database.js';
import { supabase } from '../database/supabase.storage.js';

// post project
export const addProject = async (req, res) => {
    const uploadedPaths = [];

    try {
        const { title, description } = req.body;

        const source = JSON.parse(req.body.sourceMeta);
        const type = JSON.parse(req.body.type);
        const projectStacks = JSON.parse(req.body.projectStacks);

        const files = req.files;
        const uploadedUrls = [];
        const uploadedPath = [];

        for (const file of files) {
            const fileName = `projects/${Date.now()}-${title}-${file.originalname}`;

            const { error } = await supabase.storage
                .from("portfolio")
                .upload(fileName, file.buffer, {
                    contentType: file.mimetype,
                });

            if (error) {
                throw error;
            }

            uploadedPaths.push(fileName);

            uploadedUrls.push(
                supabase.storage
                    .from("portfolio")
                    .getPublicUrl(fileName).data.publicUrl
            );
            uploadedPath.push(
                fileName
            )
        }

        const sourceWithUrls = source.map((item, index) => ({
            title: item.title,
            description: item.description,
            imgUrl: uploadedUrls[index],
            imgPath: uploadedPath[index],
        }));

        const newProject = await prisma.projects.create({
            data: {
                title,
                description,

                source: {
                    create: sourceWithUrls,
                },

                type: {
                    create: type,
                },

                projectStacks: {
                    create: projectStacks,
                },
            },
            include: {
                source: true,
                type: true,
                projectStacks: true,
            },
        });

        return res.status(201).json({
            status: "success",
            message: "Project created successfully",
            data: newProject,
        });

    } catch (error) {
        if (uploadedPaths.length > 0) {
            await supabase.storage
                .from("portfolio")
                .remove(uploadedPaths);
        }

        return res.status(500).json({
            status: "error",
            message: "Failed to create project",
            data: error.message,
        });
    }
};
// get project
export const getProjects = async (req, res) => {
    try {
        const projects = await prisma.projects.findMany({
            include: {
                source: true,
                type: true,
                projectStacks: true,
            },
        });

        res.status(200).json({ status: 'success', message: 'Projects retrieved successfully', data: projects });
    } catch (error) {
        res.status(500).json({ status: 'error', message: `Failed to retrieve projects`, data: error.message });
    }
};

// get project - private
export const getPrivateProjects = async (req, res) => {
    try {
        const projects = await prisma.projects.findMany({
            include: {
                source: true,
                type: true,
                projectStacks: true,
            },
        });

        res.status(200).json({ status: 'success', message: 'Projects retrieved successfully', data: projects });
    } catch (error) {
        res.status(500).json({ status: 'error', message: `Failed to retrieve projects`, data: error.message });
    }
};

// get single project by id
export const getSingleProject = async (req, res) => {
    const { id } = req.params;
    try {
        const projects = await prisma.projects.findUnique({
            where: {
                id
            }
        });

        res.status(200).json({ status: 'success', message: 'Projects retrieved successfully', data: projects });
    } catch (error) {
        res.status(500).json({ status: 'error', message: `Failed to retrieve projects`, data: error.message });
    }
};

export const updateProject = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    try {
        const updateProject = await prisma.projects.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description
            },
        })

        if (!updateProject) {
            res.status(404).json({ status: 'error', message: 'Project Not Exist', data: updateProject });
        }
        res.status(201).json({ status: 'success', message: 'Project Updated', data: updateProject });
    } catch (error) {
        res.status(401).json({ status: 'error', message: 'Failed to Update', data: error.message });
    }
}

// delete project
export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {

        const result = await prisma.$transaction(async (tx) => {
            const sources = await tx.sources.findMany({
                where: { projectId: id },
                select: { imgPath: true },
            });

            const imgPaths = sources.map(s => s.imgPath);

            const { data, error } = await supabase.storage
                .from("portfolio")
                .remove(imgPaths);

            console.log(data);
            console.log(error);

            if (error) {
                throw error;
            }

            await tx.projects.delete({
                where: { id },
            });
        });

        return res.status(200).json({
            status: "success",
            message: "Project deleted successfully.",
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to delete project ${id}.`,
            data: error.message,
        });
    }
};




// post project type
export const addType = async (req, res) => {
    const { projectId, types } = req.body;

    try {
        const result = await prisma.types.createMany({
            data: types.map((type) => ({
                projectId,
                type,
            })),
        });

        return res.status(201).json({
            status: "success",
            message: "Types added successfully.",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to add types for project ${projectId}.`,
            data: error.message,
        });
    }
};

// delete project type
export const deleteType = async (req, res) => {
    const { id } = req.params;


    try {
        const result = await prisma.types.delete({
            where: {
                id
            }
        })

        if (!result) {
            return res.status(500).json({
                status: "error",
                message: `Failed to delete type ${id}.`,
                data: result,
            });
        }

        return res.status(201).json({
            status: "success",
            message: "Type deleted successfully.",
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to delete type ${id}.`,
            data: error.message,
        });
    }
}

// post project stack
export const addStack = async (req, res) => {
    const { projectId, names } = req.body;

    try {
        const result = await prisma.projectStack.createMany({
            data: names.map((name) => ({
                projectId,
                name,
            })),
        });

        return res.status(201).json({
            status: "success",
            message: "Stacks added successfully.",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to add stack for project ${projectId}.`,
            data: error.message,
        });
    }
};

// delete project stack
export const deleteStack = async (req, res) => {
    const { id } = req.params;


    try {
        const result = await prisma.projectStack.delete({
            where: {
                id
            }
        })

        if (!result) {
            return res.status(500).json({
                status: "error",
                message: `Failed to delete stack ${id}.`,
                data: result,
            });
        }

        return res.status(201).json({
            status: "success",
            message: "Stack deleted successfully.",
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to delete stack ${id}.`,
            data: error.message,
        });
    }
}

// post project source
export const addSource = async (req, res) => {
    const uploadedPaths = [];

    try {
        const { projectId } = req.body;
        const files = req.files;
        const sources = JSON.parse(req.body.sources);

        const uploadedUrls = [];
        const uploadedPaths = [];

        for (const [index, file] of files.entries()) {
            const fileName = `projects/${Date.now()}-${sources[index].title}-${file.originalname}`;

            const { error } = await supabase.storage
                .from("portfolio")
                .upload(fileName, file.buffer, {
                    contentType: file.mimetype,
                });

            if (error) {
                throw error;
            }

            uploadedPaths.push(fileName);

            uploadedUrls.push(
                supabase.storage
                    .from("portfolio")
                    .getPublicUrl(fileName).data.publicUrl
            );
        }

        const sourceWithUrls = sources.map((item, index) => ({
            title: item.title,
            description: item.description,
            imgUrl: uploadedUrls[index],
            imgPath: uploadedPaths[index],
        }));

        const newProject = await prisma.sources.createMany({
            data: sourceWithUrls.map(item => ({
                projectId,
                title: item.title,
                description: item.description,
                imgUrl: item.imgUrl,
                imgPath: item.imgPath
            })),
        });

        return res.status(201).json({
            status: "success",
            message: "Source Added successfully",
            data: newProject,
        });

    } catch (error) {
        if (uploadedPaths.length > 0) {
            await supabase.storage
                .from("portfolio")
                .remove(uploadedPaths);
        }

        return res.status(500).json({
            status: "error",
            message: "Failed to Add Source",
            data: error.message,
        });
    }
}
// get single project source
export const getSingleSource = async (req, res) => {
    const { id } = req.params;
    try {
        const updateSource = await prisma.sources.findUnique({
            where: {
                id
            }
        })
        if (!updateSource) {
            res.status(500).json({ status: 'error', message: `Failed to retrieve source`, data: updateSource });
        }

        res.status(200).json({ status: 'success', message: 'Source retrieved successfully', data: updateSource });
    } catch (error) {
        res.status(500).json({ status: 'error', message: `Failed to retrieve source`, data: error.message });
    }
}
// update single project source
export const updateSingleSource = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    try {
        const updateSource = await prisma.sources.update({
            where: {
                id: id
            },
            data: {
                title, description
            }
        });
        if (!updateSource) {
            res.status(500).json({ status: 'error', message: `Failed to update source`, data: updateSource });
        }

        res.status(200).json({ status: 'success', message: 'Source updated successfully', data: updateSource });
    } catch (error) {
        res.status(500).json({ status: 'error', message: `Failed to update source`, data: error.message });
    }
}
// delete source
export const deleteSource = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await prisma.$transaction(async (tx) => {
            const source = await tx.sources.findUniqueOrThrow({
                where: {
                    id,
                },
                select: {
                    imgPath: true,
                },
            });

            const { data, error } = await supabase.storage
                .from("portfolio")
                .remove(source.imgPath);

            console.log(data);
            console.log(error);

            if (error) {
                throw error;
            }

            await prisma.sources.delete({
                where: {
                    id
                }
            })
        });

        return res.status(201).json({
            status: "success",
            message: "Source deleted successfully.",
            data: result,
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: `Failed to delete Source ${id}.`,
            data: error.message,
        });
    }
}
