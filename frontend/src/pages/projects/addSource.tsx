import useTheme from "../../components/hooks/useTheme"
import toast from "react-hot-toast";
import SourceCard from "../../components/twcss/SourceCard";
import { Loader2, Plus, Tag } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";
import { SingleImage } from "../../components/validator/imageValidator";
import { addSourceApi } from "../../components/services/projects";
import type { SourceItem } from "../../components/path/interface";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { WebRoute } from "../../routes/web.route";

let sourceIdCounter = 0;
const nextSourceId = () => `src_${++sourceIdCounter}_${Date.now()}`;

export default function AddSource() {
    const isDarkMode = useTheme();
    const { projectId } = useParams<{ projectId: string }>();
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [submitted, setSubmitted] = useState<boolean | null>(null);
    const [sources, setSources] = useState<SourceItem[]>([
        {
            id: nextSourceId(),
            title: "",
            description: "",
            imgFile: null,
            previewUrl: null,
        },
    ]);

    // ======================
    // MANIPULATE SOURCES
    // ======================

    const updateSource = (id: string, patch: Partial<SourceItem>) => {
        const ValidateImage = SingleImage(patch);

        if (!ValidateImage) {
            return;
        }

        setSources((prev) =>
            prev.map((source) =>
                source.id === id ? { ...source, ...patch } : source
            )
        );
    };

    const removeSource = (id: string) => {
        setSources((prev) => prev.filter((source) => source.id !== id));
    };

    const addSource = () => {
        setSources((prev) => [
            ...prev,
            {
                id: nextSourceId(),
                title: "",
                description: "",
                imgFile: null,
                previewUrl: null,
            },
        ]);
    };

    // ======================
    // SUBMIT
    // ======================

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (submitting) return;

        setLoading(true);
        setSubmitting(true);

        const formData = new FormData();
        formData.append(
            "sources",
            JSON.stringify(
                sources.map(({ title, description }) => ({
                    title,
                    description,
                }))
            )
        );
        sources.forEach(({ imgFile }) => {
            if (imgFile) {
                formData.append("images", imgFile);
            }
        });

        try {
            const response = await addSourceApi(projectId, formData);

            if (response.status === "error") {
                setSubmitted(false);
                toast.error(response.message);
                setLoading(false);
            }

            setSubmitted(true);
            toast.success(response.message);
            setLoading(false);
            setSources([
                {
                    id: nextSourceId(),
                    title: "",
                    description: "",
                    imgFile: null,
                    previewUrl: null,
                },
            ]);
        } catch (error) {
            console.error(error);
            setSubmitted(false);
            setLoading(false);
        } finally {
            setSubmitted(null);
            setSubmitting(false);
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div
                    className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${isDarkMode
                        ? "bg-[#050505]"
                        : "bg-gray-100"
                        }`}
                >
                    <section
                        className={`w-full max-w-2xl rounded-2xl border p-8 shadow-lg transition-colors ${isDarkMode
                            ? "bg-[#0A0A0A] text-white border-white/10"
                            : "bg-gray-50 text-black border-gray-200"
                            }`}
                    >
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={WebRoute.LOGIN}>Login</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={WebRoute.CONTROL_PANEL}>Control Panel</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>PROJECT SOURCE</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="mb-8 text-center">
                            <div className="mb-4 flex justify-center">
                                <div
                                    className={`rounded-full p-3 ${isDarkMode
                                        ? "bg-cyan-500/10 text-cyan-400"
                                        : "bg-cyan-100 text-cyan-600"
                                        }`}
                                >
                                    <Tag size={24} />
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold">Project Source</h2>
                        </div>

                        <div className="w-full space-y-3 pl-8">
                            {sources.map((s, i) => (
                                <SourceCard
                                    key={s.id}
                                    index={i}
                                    item={s}
                                    canRemove={sources.length > 1}
                                    onChange={(patch) => updateSource(s.id, patch)}
                                    onRemove={() => removeSource(s.id)}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={addSource}
                                className={`flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed py-2.5 font-mono text-xs transition ${isDarkMode
                                    ? "border-[#232838] text-[#6B7280] hover:border-[#3A4256] hover:text-[#9CA3AF]"
                                    : "border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                                    }`}
                            >
                                <Plus size={13} /> Add screenshot
                            </button>
                        </div>

                        <p
                            className={`mt-6 text-center text-sm ${isDarkMode
                                ? "text-gray-400"
                                : "text-gray-500"
                                }`}
                        >
                        </p>
                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={submitted}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-200 ${submitted
                                    ? "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-600"
                                    : isDarkMode
                                        ? "bg-cyan-500 text-white hover:bg-cyan-400 active:scale-[0.98]"
                                        : "bg-cyan-600 text-white hover:bg-cyan-700 active:scale-[0.98]"
                                    }`}
                            >
                                {loading === true ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        Save
                                    </>
                                )}

                            </button>
                        </div>

                    </section >
                </div >
            </form>
        </>
    )
}