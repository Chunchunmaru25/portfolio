import { TagInput } from "../../components/twcss/InputChip";
import { FieldLabel } from "../../components/twcss/FieldLabel";
import { Tag, Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { addTypeApi } from "../../components/services/projects";
import { TYPE_SUGGESTIONS } from "../../components/path/suggestions";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { WebRoute } from "../../routes/web.route";
import axios from "axios";
export default function AddType() {
    const isDarkMode = useTheme();
    const [types, setTypes] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);
    const { projectId } = useParams<{ projectId: string }>();

    const handleSubmit = async () => {
        if (!types.length || submitted || !projectId) return;
        setLoading(true);

        try {
            const addNewType = await addTypeApi(projectId, types);
            if (addNewType.data.count === 0) {
                toast.error("Failed to add");
                setSubmitted(false);
                setLoading(false);
            }
            toast.success("Type Added");
            setSubmitted(true);
            setLoading(false);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Request failed");
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Unknown error");
            }
            console.error(error);
            setSubmitted(false);
        }
    };
    return (
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
                            <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>PROJECT TYPE</BreadcrumbPage>
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

                    <h2 className="text-2xl font-bold">Project Type</h2>

                    <p
                        className={`mt-2 text-sm ${isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                            }`}
                    >
                        Choose one or more categories for your project.
                    </p>
                </div>

                <FieldLabel hint="Pick from the list or add your own">
                    <span className="inline-flex items-center gap-2">
                        <Tag size={14} />
                        Type
                    </span>
                </FieldLabel>

                <div className="mt-3">
                    <TagInput
                        values={types}
                        onAdd={(v) => setTypes((p) => [...p, v])}
                        onRemove={(v) =>
                            setTypes((p) => p.filter((x) => x !== v))
                        }
                        suggestions={TYPE_SUGGESTIONS}
                        placeholder="Automation, Web App..."
                        tone="type"
                        isDisabled={true}
                    />
                </div>

                <p
                    className={`mt-6 text-center text-sm ${isDarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                        }`}
                >
                    {types.length} {types.length === 1 ? "type" : "types"} selected
                </p>
                <div className="mt-8">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!types.length || submitted === true}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-200
            ${!types.length || submitted
                                ? "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-600"
                                : isDarkMode
                                    ? "bg-cyan-500 text-white hover:bg-cyan-400 active:scale-[0.98]"
                                    : "bg-cyan-600 text-white hover:bg-cyan-700 active:scale-[0.98]"
                            }`}
                    >
                        {loading === true && (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Saving...
                            </>
                        )}
                        {(submitted === true &&
                            <>
                                <Check size={18} />
                                Save {types.length > 0 ? `(${types.length})` : ""}
                            </>
                        )}
                        {(submitted === false &&
                            <>
                                <X size={18} />
                                Save {types.length > 0 ? `(${types.length})` : ""}
                            </>
                        )}
                        {(submitted === null &&
                            <>
                                Save {types.length > 0 ? `(${types.length})` : ""}
                            </>
                        )}
                    </button>
                </div>

            </section >
        </div >
    );
}