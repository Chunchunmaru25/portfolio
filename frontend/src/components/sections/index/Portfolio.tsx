import { useState } from "react";
import useProjects from "../../hooks/useProjects";
import useTheme from "../../hooks/useTheme";
import MorphingCard from "../../twcss/MorphingCard";
import type { ProjectCategory } from "../../path/type";
import type { Project } from "../../path/interface";

type FilterType = "all" | ProjectCategory;



const FILTERS: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "development", label: "Development" },
    { key: "automation", label: "Automation" },
    { key: "mockup", label: "Mockup" },
];

// function TypeIcon({ svg, color }: { svg: string; color: string }) {
//     return (
//         <div
//             style={{ width: 40, height: 40, color }}
//             dangerouslySetInnerHTML={{ __html: svg }}
//         />
//     );
// }

export default function ProjectFilter() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const isDarkMode = useTheme();
    const { Projects, loading, error } = useProjects();

    const formattedProjects: Project[] = Projects.map((project) => ({
        ...project,
        type: project.type.map((t) => ({
            ...t,
            type: t.type as ProjectCategory,
        })),
    }));

    const visibleProjects: Project[] =
        activeFilter === "all"
            ? formattedProjects
            : formattedProjects.filter((project) =>
                project.type.some((t) => t.type === activeFilter)
            );

    if (error) {
        return (
            <>
                <p className="text-center text-red-500">
                    Project Cannot Fetch
                </p>
            </>
        )
    }
    return (
        <div
            className={`min-h-screen w-full flex items-center justify-center px-4 py-10 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"
                }`}
        >
            <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
            <div className="w-full max-w-5xl mx-auto">
                {/* Filter choices */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter.key;
                        return (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-150 active:scale-95
                  ${isActive
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {loading && (
                    <p className="text-sm text-gray-500 text-center py-8">
                        Loading Portfolio...
                    </p>
                )}

                {!loading && error && (
                    <p className="text-sm text-red-400 text-center py-8">{error}</p>
                )}

                {!loading && !error && (
                    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {visibleProjects.map((project) => (
                            <div
                                key={project.id}
                                style={{ animation: "cardIn 0.3s ease-out" }}
                            >
                                <MorphingCard
                                    title={project.title}
                                    subtitle={project.description}
                                    techstack={project.projectStacks.map((tech) => ({
                                        key: tech.id,
                                        techstack: tech.name,
                                    }))}
                                    images={project.source?.map((img) => ({
                                        key: img.id,
                                        caption: img.title,
                                        src: img.imgUrl,
                                        description: img.description,
                                    }))}
                                />
                            </div>
                        ))}

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