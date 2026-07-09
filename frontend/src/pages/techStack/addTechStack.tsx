import { TECHTYPE_SUGGESTIONS } from "../../components/path/suggestions";
import { Tag, Loader2, Check, X } from "lucide-react";
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbList } from "../../components/ui/breadcrumb";
import { WebRoute } from "../../routes/web.route";
import useTheme from "../../components/hooks/useTheme";
import { FieldLabel } from "../../components/twcss/FieldLabel";
import { TagInput } from "../../components/twcss/InputChip";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import toast from "react-hot-toast";
import { useState } from "react";
import { addTechStack } from "../../components/services/techStack";
export default function AddTechStack() {
    const isDarkMode = useTheme();
    const [stack, setStack] = useState("");
    const [color, setColor] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!types.length || submitted) return;
        setLoading(true);

        try {
            const addNewType = await addTechStack(stack, color, imgUrl, types);
            if (addNewType.data.count === 0) {
                toast.error("Failed to add");
                setSubmitted(false);
                setLoading(false);
            }
            toast.success("Stack Added");
            setSubmitted(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setSubmitted(false);
            toast.error(error.message);
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
                <div className="mb-8 text-center">
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
                                <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>PROJECT STACK</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
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

                    <h2 className="text-2xl font-bold">Project Stack</h2>

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

                <div className="mb-5">
                    <Label
                        htmlFor="stack"
                        className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                        Stack
                    </Label>
                    <Input
                        id="stack"
                        type="text"
                        value={stack}
                        onChange={(e) => setStack((e.target.value))}
                        required
                        autoComplete="email"
                        placeholder="you@domain.com"
                        className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                    />
                </div>
                <div className="mb-5">
                    <Label
                        htmlFor="color"
                        className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                        Color
                    </Label>
                    <Input
                        id="color"
                        type="color"
                        value={color}
                        onChange={(e) => setColor((e.target.value))}
                        required
                        autoComplete="email"
                        placeholder="you@domain.com"
                        className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                    />
                </div>

                <div className="mb-5">
                    <Label
                        htmlFor="imgUrl"
                        className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                        Color
                    </Label>
                    <Input
                        id="imgUrl"
                        type="text"
                        value={imgUrl}
                        onChange={(e) => setImgUrl((e.target.value))}
                        required
                        autoComplete="email"
                        placeholder="SVG"
                        className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                    />
                </div>

                <div className="mt-3">
                    <TagInput
                        values={types}
                        onAdd={(v) => setTypes((p) => [...p, v])}
                        onRemove={(v) =>
                            setTypes((p) => p.filter((x) => x !== v))
                        }
                        suggestions={TECHTYPE_SUGGESTIONS}
                        placeholder="Frontend, Backend..."
                        tone="type"
                        isDisabled={false}
                    />
                </div>

                <p
                    className={`mt-6 text-center text-sm ${isDarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                        }`}
                >
                    {types.length} {types.length === 1 ? "stack" : "stacks"} selected
                </p>
                <div className="mt-8">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!types.length || submitted}
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