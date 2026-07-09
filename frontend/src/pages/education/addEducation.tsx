import { useState } from "react";
import toast from "react-hot-toast";
import { GraduationCap, Loader2, Plus, X } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
// import { addEducationApi } from "../../components/services/education"; // wire up when backend is ready
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { WebRoute } from "../../routes/web.route";
import { addEducation } from "../../components/services/education";

export interface AddEducationPayload {
    program: string;
    branch: string;
    startDate: string;
    endDate: string;
    description: string[];
}

interface DescriptionItem {
    id: string;
    text: string;
}

let descIdCounter = 0;
const nextDescId = () => `desc_${++descIdCounter}_${Date.now()}`;

interface AddEducationFormProps {
    onSuccess?: (payload: AddEducationPayload) => void;
}

export default function AddEducation({ onSuccess }: AddEducationFormProps) {
    const isDarkMode = useTheme();

    const [program, setProgram] = useState("");
    const [branch, setBranch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [descriptions, setDescriptions] = useState<DescriptionItem[]>([
        { id: nextDescId(), text: "" },
    ]);

    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [submitted, setSubmitted] = useState<boolean | null>(null);

    // ======================
    // MANIPULATE DESCRIPTIONS
    // ======================
    const updateDescription = (id: string, text: string) => {
        setDescriptions((prev) => prev.map((d) => (d.id === id ? { ...d, text } : d)));
    };

    const removeDescription = (id: string) => {
        setDescriptions((prev) => prev.filter((d) => d.id !== id));
    };

    const addDescription = () => {
        setDescriptions((prev) => [...prev, { id: nextDescId(), text: "" }]);
    };

    // ======================
    // SUBMIT
    // ======================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (submitting) return;

        if (!program.trim() || !branch.trim() || !startDate || !endDate) {
            toast.error("Program, branch, and dates are required");
            return;
        }
        if (new Date(endDate) < new Date(startDate)) {
            toast.error("End date must be after start date");
            return;
        }

        setLoading(true);
        setSubmitting(true);

        const payload: AddEducationPayload = {
            program: program.trim(),
            branch: branch.trim(),
            startDate,
            endDate,
            description: descriptions.map((d) => d.text.trim()).filter(Boolean),
        };

        try {
            const response = await addEducation(payload);
            if (response.status === "error") {
                setSubmitted(false);
                toast.error(response.message);
                setLoading(false);
                return;
            }

            setSubmitted(true);
            toast.success(response.message);
            setLoading(false);

            setProgram("");
            setBranch("");
            setStartDate("");
            setEndDate("");
            setDescriptions([{ id: nextDescId(), text: "" }]);
            onSuccess?.(payload);
        } catch (error) {
            console.error(error);
            setSubmitted(false);
            toast.error(error.response.data.message);
            setLoading(false);
        } finally {
            setSubmitted(null);
            setSubmitting(false);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div
                className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${isDarkMode ? "bg-[#050505]" : "bg-gray-100"
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
                                <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>EDUCATION</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mb-8 text-center">
                        <div className="mb-4 flex justify-center">
                            <div
                                className={`rounded-full p-3 ${isDarkMode ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-100 text-cyan-600"
                                    }`}
                            >
                                <GraduationCap size={24} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold">Add Education</h2>
                    </div>

                    {/* Program / Branch / Dates */}
                    <div className="w-full space-y-4">
                        <div>
                            <label className={`mb-1.5 block text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                Program
                            </label>
                            <input
                                value={program}
                                onChange={(e) => setProgram(e.target.value)}
                                placeholder="e.g. Bachelor of Science in Computer Science"
                                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-cyan-500 ${isDarkMode
                                    ? "border-white/10 bg-[#050505] text-white placeholder:text-gray-600"
                                    : "border-gray-200 bg-white text-black placeholder:text-gray-400"
                                    }`}
                            />
                        </div>

                        <div>
                            <label className={`mb-1.5 block text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                Branch / Institution
                            </label>
                            <input
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                placeholder="e.g. Westbridge Institute of Technology Inc."
                                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-cyan-500 ${isDarkMode
                                    ? "border-white/10 bg-[#050505] text-white placeholder:text-gray-600"
                                    : "border-gray-200 bg-white text-black placeholder:text-gray-400"
                                    }`}
                            />
                        </div>

                        <div className="flex gap-3">
                            <div className="flex-1">
                                <label className={`mb-1.5 block text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-cyan-500 ${isDarkMode ? "border-white/10 bg-[#050505] text-white" : "border-gray-200 bg-white text-black"
                                        }`}
                                />
                            </div>
                            <div className="flex-1">
                                <label className={`mb-1.5 block text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-cyan-500 ${isDarkMode ? "border-white/10 bg-[#050505] text-white" : "border-gray-200 bg-white text-black"
                                        }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="w-full space-y-3 pl-8 mt-6">
                        {descriptions.map((d, i) => (
                            <DescriptionCard
                                key={d.id}
                                index={i}
                                value={d.text}
                                canRemove={descriptions.length > 1}
                                isDarkMode={isDarkMode}
                                onChange={(text) => updateDescription(d.id, text)}
                                onRemove={() => removeDescription(d.id)}
                            />
                        ))}
                        <button
                            type="button"
                            onClick={addDescription}
                            className={`flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed py-2.5 font-mono text-xs transition ${isDarkMode
                                ? "border-[#232838] text-[#6B7280] hover:border-[#3A4256] hover:text-[#9CA3AF]"
                                : "border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                                }`}
                        >
                            <Plus size={13} /> Add description
                        </button>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={submitted === true}
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
                                <>Save</>
                            )}
                        </button>
                    </div>
                </section>
            </div>
        </form>
    );
}

// ======================
// Description card (mirrors SourceCard's role)
// ======================
interface DescriptionCardProps {
    index: number;
    value: string;
    canRemove: boolean;
    isDarkMode: boolean;
    onChange: (text: string) => void;
    onRemove: () => void;
}

function DescriptionCard({ index, value, canRemove, isDarkMode, onChange, onRemove }: DescriptionCardProps) {
    return (
        <div
            className={`group flex items-start gap-2 rounded-lg border px-3 py-2 ${isDarkMode ? "border-[#232838] bg-[#0A0A0A]" : "border-gray-200 bg-gray-50"
                }`}
        >
            <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${isDarkMode ? "bg-[#1A1F2B] text-cyan-400" : "bg-cyan-100 text-cyan-600"
                    }`}
            >
                {index + 1}
            </span>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={2}
                placeholder="Describe an accomplishment, activity, or focus area…"
                className={`w-full resize-none rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-cyan-500 ${isDarkMode ? "border-[#232838] text-[#E6E9EF] placeholder:text-gray-600" : "border-gray-200 text-black placeholder:text-gray-400"
                    }`}
            />
            {canRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    title="Remove"
                    className={`shrink-0 rounded-lg p-1 opacity-0 transition group-hover:opacity-100 ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"
                        }`}
                >
                    <X size={13} />
                </button>
            )}
        </div>
    );
}