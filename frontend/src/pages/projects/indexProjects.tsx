import { useEffect, useState } from "react";
import { Tag, Layers, Image as ImageIcon, Calendar, Plus, X, Trash2, EditIcon } from "lucide-react";
import { deleteProjectApi, deleteStackApi, deleteTypeApi, deleteSourceApi, getPrivateProjects } from "../../components/services/projects";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { WebRoute } from "../../routes/web.route";
import type { ProjectRecord } from "../../components/path/interface";


const formatDate = (iso: string) =>
    new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });



export default function ProjectsView() {
    const isDarkMode = useTheme();
    const navigate = useNavigate();
    const [projects, setProjects] = useState<ProjectRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPrivateProjects();

                if (response.status === "success") {
                    setProjects(response.data ?? []);
                } else {
                    setError(true);
                }
            } catch {
                navigate(WebRoute.LOGIN);
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    // ======================
    // Project
    // ======================
    const handleDeleteProject = async (projectId: string) => {
        if (!window.confirm("Delete this project?")) return;
        try {
            const deleteProject = await deleteProjectApi(projectId);
            if (deleteProject.status === "error") {
                toast.error(deleteProject.message);
            }
            setProjects((prev) => prev.filter((p) => p.id !== projectId));
            toast.success(deleteProject.message);
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete project");
        }
    };

    const handleEditProject = async (projectId: string) => {
        navigate(`${WebRoute.EDIT_PROJECT.replace(":projectId", projectId)}`);
    };

    // ======================
    // Type
    // ======================
    const handleAddType = async (projectId: string) => {
        navigate(`${WebRoute.ADD_PROJECT_TYPE.replace(":projectId", projectId)}`);
    };

    const handleDeleteType = async (projectId: string, typeId: string) => {
        if (!window.confirm("Delete this Type?")) return;
        try {
            const deleteType = await deleteTypeApi(typeId);
            if (deleteType.status === "error") {
                toast.error(deleteType.message);
            }
            setProjects((prev) =>
                prev.map((p) =>
                    p.id === projectId
                        ? { ...p, type: p.type.filter((t) => t.id !== typeId) }
                        : p
                )
            );
            toast.success("Type Deleted");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete type");
        }
    };

    // ======================
    // Stack
    // ======================
    const handleAddStack = async (projectId: string) => {
        navigate(`${WebRoute.ADD_PROJECT_STACK.replace(":projectId", projectId)}`);
    };

    const handleDeleteStack = async (projectId: string, stackId: string) => {
        if (!window.confirm("Delete this Stack?")) return;
        try {
            const deleteStack = await deleteStackApi(stackId);
            if (deleteStack.status === "error") {
                toast.error(deleteStack.message);
            }
            setProjects((prev) =>
                prev.map((p) =>
                    p.id === projectId
                        ? { ...p, projectStacks: p.projectStacks.filter((s) => s.id !== stackId) }
                        : p
                )
            );
            toast.success("Stack Deleted");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete stack");
        }
    };

    // ======================
    // Source 
    // ======================
    const handleAddSource = async (projectId: string) => {
        navigate(`${WebRoute.ADD_PROJECT_SOURCE.replace(":projectId", projectId)}`);
    };

    const handleDeleteSource = async (projectId: string, sourceId: string) => {
        if (!window.confirm("Delete this Source?")) return;
        try {
            const deleteSource = await deleteSourceApi(sourceId);

            if (deleteSource.status === "error") {
                toast.error(deleteSource.message);
            }
            setProjects((prev) =>
                prev.map((p) =>
                    p.id === projectId
                        ? { ...p, source: p.source.filter((s) => s.id !== sourceId) }
                        : p
                )
            );
            toast.success("Source Deleted");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete screenshot");
        }
    };

    const handleUpdateSource = async (sourceId: string) => {
        navigate(`${WebRoute.EDIT_SOURCE.replace(":sourceId", sourceId)}`);
    };


    return (
        <div className={`min-h-full w-full ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"}`}>
            <div className="w-full p-3 sm:p-4 md:p-8">
                {/* Breadcrumb */}
                {/* <div className={`mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={WebRoute.LOGIN}>Login</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>Control Panel</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div> */}

                {/* Header */}
                <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
                    <div>
                        <h1 className={`mb-1.5 text-2xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                            Projects
                        </h1>
                        {/* <p className={`text-sm ${isDarkMode ? "text-[#6B7280]" : "text-gray-500"}`}>
                            Data as returned by the server.
                        </p> */}
                    </div>
                    <div className="flex items-center gap-3">
                        {!loading && !error && (
                            <span className={`font-mono text-[11px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                {projects.length} project{projects.length === 1 ? "" : "s"}
                            </span>
                        )}
                        <a href="/projects"
                            type="button"
                            className="flex items-center gap-1.5 rounded-lg bg-[#5B8DEF] px-3.5 py-2 text-xs font-medium text-white transition hover:bg-[#79A2F5]"
                        >
                            <Plus size={13} /> Add project
                        </a>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                        Loading projects…
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] text-red-500 ${isDarkMode ? "border-[#1A1F2B]" : "border-gray-200"}`}>
                        Failed to load projects ✗
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && projects.length === 0 && (
                    <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                        No projects found.
                    </div>
                )}

                {/* Project list */}
                {!loading && !error && projects.length > 0 && (
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`rounded-2xl border p-5 sm:p-6 ${isDarkMode ? "border-[#1A1F2B] bg-[#0D1017]" : "border-gray-200 bg-white"}`}
                            >
                                {/* Title / description / dates */}
                                <div className="mb-4 flex items-start justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h2 className={`text-lg font-semibold ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                                            {project.title}
                                        </h2>
                                        {project.description && (
                                            <p className={`text-sm ${isDarkMode ? "text-[#8FA3C9]" : "text-gray-600"}`}>
                                                {project.description}
                                            </p>
                                        )}
                                        <div className={`mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                            <Calendar size={11} />
                                            <span>Created {formatDate(project.createdAt)}</span>
                                            {project.updatedAt !== project.createdAt && (
                                                <span>· Updated {formatDate(project.updatedAt)}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => handleEditProject(project.id)}
                                            title="Delete project"
                                            className={`shrink-0 rounded-lg p-1.5 transition ${isDarkMode
                                                ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400"
                                                : "text-gray-400 hover:bg-gray-100 hover:text-red-500"
                                                }`}
                                        >
                                            <EditIcon size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteProject(project.id)}
                                            title="Delete project"
                                            className={`shrink-0 rounded-lg p-1.5 transition ${isDarkMode
                                                ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400"
                                                : "text-gray-400 hover:bg-gray-100 hover:text-red-500"
                                                }`}
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </div>

                                {/* Type + Stack badges */}
                                <div className="mb-5 flex flex-wrap gap-5">
                                    {/* Type */}
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <Tag size={11} className={isDarkMode ? "text-[#4B5468]" : "text-gray-400"} />
                                        {project.type.map((t) => (
                                            <span
                                                key={t.id}
                                                className={`group flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] ${isDarkMode
                                                    ? "bg-[#1A1F2B] text-[#9CB8F0]"
                                                    : "bg-blue-50 text-blue-600"
                                                    }`}
                                            >
                                                {t.type}
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteType(project.id, t.id)}
                                                    className="opacity-60 transition hover:opacity-100"
                                                    title="Remove type"
                                                >
                                                    <X size={10} />
                                                </button>
                                            </span>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => handleAddType(project.id)}
                                            title="Add type"
                                            className={`flex h-5 w-5 items-center justify-center rounded-full border border-dashed transition ${isDarkMode
                                                ? "border-[#3A4256] text-[#4B5468] hover:border-[#5B8DEF] hover:text-[#5B8DEF]"
                                                : "border-gray-300 text-gray-400 hover:border-blue-400 hover:text-blue-500"
                                                }`}
                                        >
                                            <Plus size={10} />
                                        </button>
                                    </div>

                                    {/* Stacks */}
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <Layers size={11} className={isDarkMode ? "text-[#4B5468]" : "text-gray-400"} />
                                        {project.projectStacks.map((s) => (
                                            <span
                                                key={s.id}
                                                className={`group flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] ${isDarkMode
                                                    ? "bg-[#1A1F2B] text-[#7FD9BB]"
                                                    : "bg-emerald-50 text-emerald-600"
                                                    }`}
                                            >
                                                {s.name}
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteStack(project.id, s.id)}
                                                    className="opacity-60 transition hover:opacity-100"
                                                    title="Remove stack"
                                                >
                                                    <X size={10} />
                                                </button>
                                            </span>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => handleAddStack(project.id)}
                                            title="Add stack"
                                            className={`flex h-5 w-5 items-center justify-center rounded-full border border-dashed transition ${isDarkMode
                                                ? "border-[#3A4256] text-[#4B5468] hover:border-[#5B8DEF] hover:text-[#5B8DEF]"
                                                : "border-gray-300 text-gray-400 hover:border-emerald-400 hover:text-emerald-500"
                                                }`}
                                        >
                                            <Plus size={10} />
                                        </button>
                                    </div>
                                </div>

                                {/* Sources / screenshots */}
                                <div>
                                    <div className={`mb-2 flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-wide ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                        <span className="flex items-center gap-1.5">
                                            <ImageIcon size={11} />
                                            Screenshots
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleAddSource(project.id)}
                                            className={`flex items-center gap-1 normal-case transition ${isDarkMode
                                                ? "text-[#5B8DEF] hover:text-[#79A2F5]"
                                                : "text-blue-600 hover:text-blue-500"
                                                }`}
                                        >
                                            <Plus size={11} /> Add
                                        </button>
                                    </div>
                                    {project.source.length > 0 ? (
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {project.source.map((src) => (
                                                <div
                                                    key={src.id}
                                                    className={`group relative overflow-hidden rounded-lg border ${isDarkMode ? "border-[#232838] bg-[#0A0A0A]" : "border-gray-200 bg-gray-50"}`}
                                                >
                                                    <div className="absolute top-1.5 right-1.5 flex gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleUpdateSource(src.id)}
                                                            title="Edit Screenshot"
                                                            className=" right-1.5 top-1.5 rounded-full bg-black/60 p-1 text-white hover:bg-red-500"
                                                        >
                                                            <EditIcon size={12} />
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteSource(project.id, src.id)}
                                                            title="Delete screenshot"
                                                            className=" right-1.5 top-1.5 rounded-full bg-black/60 p-1 text-white hover:bg-red-500"
                                                        >
                                                            <Trash2 size={12} />
                                                        </button>
                                                    </div>

                                                    {src.imgUrl && (
                                                        <img
                                                            src={src.imgUrl}
                                                            alt={src.title}
                                                            className="h-36 w-full object-cover"
                                                            loading="lazy"
                                                        />
                                                    )}
                                                    <div className="p-2.5">
                                                        <p className={`text-xs font-medium ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                                            {src.title}
                                                        </p>
                                                        {src.description && (
                                                            <p className={`mt-0.5 text-[11px] ${isDarkMode ? "text-[#6B7280]" : "text-gray-500"}`}>
                                                                {src.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className={`font-mono text-[11px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                            No screenshots yet.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}