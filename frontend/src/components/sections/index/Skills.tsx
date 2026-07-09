import RangeProgressWTooltip from "../../twcss/RangeWithTooltip";
import useFrontendSkills from "../../hooks/useFrontendSkills";
import useBackendSkills from "../../hooks/useBackendSkills";
import useTheme from "../../hooks/useTheme";
import { useInView } from "react-intersection-observer";
import { SkeletonText, SkeletonRectangle } from "../../reactbits/Skeleton";
export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { frontend, loading, error: frontendError } = useFrontendSkills(inView);
    const { backend, loading: backendLoading, error: backendError } = useBackendSkills(inView);
    const isDarkMode = useTheme();
    if (loading) {
        return <p>Loading . . .</p>
    }

    if (frontendError && backendError) {
        return <p className="text-red-600 flex justify-center">Failed to load skills.</p>;
    }
    return (
        <>
            <section
                id="about"
                className={`py-5 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"
                    }`} ref={ref}
            >
                <div className="max-w-[80%] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        <div className="flex">
                            <div
                                className={`relative rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col border ${isDarkMode
                                    ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700"
                                    : "bg-gradient-to-br from-white to-gray-100 border-gray-200"
                                    }`}
                            >
                                <h1 className="mb-4 flex">Frontend Development</h1>
                                <hr className="w-1/3 bg-gray-400 border rounded-xl h-[3px] mb-5" />
                                <div className="flex-1 flex flex-col justify-start gap-4">
                                    {loading ? (
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="space-y-2">
                                                <SkeletonText className="h-5 w-32" />
                                                <SkeletonText className="h-3 w-48 opacity-70" />
                                                <SkeletonRectangle className="h-2 w-full" />
                                            </div>
                                        ))
                                    ) : frontend.length === 0 ? (
                                        <p className="text-center text-gray-500">
                                            No frontend skills found.
                                        </p>
                                    ) : (
                                        frontend.map((skill) => (
                                            <RangeProgressWTooltip
                                                key={skill.id}
                                                language={skill.skills}
                                                description={skill.description}
                                                progress={skill.progress}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div
                                className={`relative rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col border ${isDarkMode
                                    ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700"
                                    : "bg-gradient-to-br from-white to-gray-100 border-gray-200"
                                    }`}
                            >
                                <h1 className="mb-4 flex">Backend Development</h1>
                                <hr className="w-1/3 bg-gray-400 border rounded-xl h-[3px] mb-5" />
                                <div className="flex-1 flex flex-col justify-start gap-4">
                                    {backendLoading ? (
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="space-y-2">
                                                <SkeletonText className="h-5 w-36" />
                                                <SkeletonText className="h-3 w-52 opacity-70" />
                                                <SkeletonRectangle className="h-2 w-full rounded-full" />
                                            </div>
                                        ))
                                    ) : backend.length === 0 ? (
                                        <>
                                            <p className="text-center text-gray-500">
                                                No backend skills found.
                                            </p>
                                        </>
                                    ) : (
                                        backend.map((skill) => (
                                            <RangeProgressWTooltip
                                                key={skill.id}
                                                language={skill.skills}
                                                description={skill.description}
                                                progress={skill.progress}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}