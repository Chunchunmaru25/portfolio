import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import useTechStack from "../../hooks/useTechStack";

type ProjectType =
    | "frontend"
    | "backend"
    | "databaseandserver"
    | "developmenttools"
    | "templateanddesign";

type FilterType = "all" | ProjectType;


interface TechStackTypeApiItem {
    id: string;
    type: ProjectType;
    createdAt: string;
    updatedAt: string;
    techStackId: string;
}

interface TechStackApiItem {
    id: string;
    stack: string;
    bgColor: string;
    imgUrl: string;
    createdAt: string;
    updatedAt: string;
    techstacktype: TechStackTypeApiItem[];
}

interface Project {
    id: string;
    title: string;
    description: string;
    types: ProjectType[];
    color: string;
    imgUrl: string;
}

const FILTERS: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "databaseandserver", label: "Database And Server" },
    { key: "developmenttools", label: "Development Tools" },
    { key: "templateanddesign", label: "Template And Design" },
];
function TypeIcon({ imgUrl, title }: { imgUrl: string; title: string }) {
    const isRawSvg = imgUrl.trim().startsWith("<svg");

    if (isRawSvg) {
        return (
            <div
                aria-label={title}
                className="w-10 h-10 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: imgUrl }}
            />
        );
    }

    return (
        <img
            src={imgUrl}
            alt={title}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            loading="lazy"
        />
    );
}

export default function TechStack() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const isDarkMode = useTheme();
    const { techStack } = useTechStack();

    useEffect(() => {
        let cancelled = false;

        async function loadTechStack() {
            setIsLoading(true);
            setError(null);
            try {
                const mapped: Project[] = (techStack as TechStackApiItem[]).map(
                    (item) => ({
                        id: item.id,
                        title: item.stack,
                        description: item.stack,
                        types: item.techstacktype?.map((t) => t.type) ?? [],
                        color: item.bgColor,
                        imgUrl: item.imgUrl,
                    })
                );
                if (!cancelled) {
                    setProjects(mapped);
                }
            } catch (err) {
                if (!cancelled) {
                    const message =
                        err instanceof Error ? err.message : "Unknown error";
                    setError(`Couldn't load the tech stack. Try again. ${message}`);
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        loadTechStack();
        return () => {
            cancelled = true;
        };
    }, [techStack]);

    const visibleProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.types.includes(activeFilter));

    return (
        <div
            className={`min-h-screen w-full flex items-center justify-center px-4 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"
                }`}
        >
            <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

            <div className="w-full max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter.key;
                        return (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-150 active:scale-95 ${isActive
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {isLoading && (
                    <p className="text-sm text-gray-500 text-center py-8">
                        Loading tech stack...
                    </p>
                )}

                {!isLoading && error && (
                    <p className="text-sm text-red-400 text-center py-8">{error}</p>
                )}

                {!isLoading && !error && (
                    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {visibleProjects.map((project, idx) => {
                            const color = project.color;
                            const isHighlighted =
                                activeFilter !== "all" && project.types.includes(activeFilter);

                            return (
                                <div
                                    key={`${project.id}-${activeFilter}`}
                                    className={`group relative rounded-2xl border ${isDarkMode
                                        ? "bg-[#101010] text-white"
                                        : "bg-white text-black"
                                        } p-5 flex flex-col items-center justify-center text-center aspect-square transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03]`}
                                    style={{
                                        borderColor: isHighlighted ? color : `${color}55`,
                                        boxShadow: isHighlighted
                                            ? `0 0 24px ${color}80, 0 0 4px ${color}66 inset`
                                            : `0 0 12px ${color}26`,
                                        animation: `cardIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 70
                                            }ms both`,
                                    }}
                                >
                                    <div className="mb-3 transition-transform duration-200 group-hover:scale-110">
                                        <TypeIcon imgUrl={project.imgUrl} title={project.title} />
                                    </div>
                                    <p
                                        className="text-sm font-semibold"
                                        style={{ color: isHighlighted ? color : "#d1d5db" }}
                                        title={project.description}
                                    >
                                        {project.title}
                                    </p>
                                </div>
                            );
                        })}

                        {visibleProjects.length === 0 && (
                            <p className="text-sm text-gray-500 col-span-full text-center py-8">
                                No items match this filter.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}