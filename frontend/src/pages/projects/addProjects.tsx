import { useState } from "react";
import {
    Plus,
    // Terminal,
    Layers,
    Tag,
} from "lucide-react";
import SourceCard from "../../components/twcss/SourceCard";
import { TagInput } from "../../components/twcss/InputChip";
import { FieldLabel } from "../../components/twcss/FieldLabel";
import { addProjects } from "../../components/services/projects";
import useTheme from "../../components/hooks/useTheme";
import { TYPE_SUGGESTIONS, STACK_SUGGESTIONS } from "../../components/path/suggestions";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { SingleImage } from "../../components/validator/imageValidator";
import type { SourceItem } from "../../components/path/interface";
import toast from "react-hot-toast";

// interface ProjectPayload {
//     title: string;
//     description: string;
//     source: { title: string; description: string; imgUrl: string }[];
//     type: { type: string }[];
//     projectStacks: { name: string }[];
// }


let sourceIdCounter = 0;
const nextSourceId = () => `src_${++sourceIdCounter}_${Date.now()}`;

export default function Projects() {
    const isDarkMode = useTheme();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    const [stacks, setStacks] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);
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
    // Handlers
    // ======================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (submitting) return;

        setSubmitting(true);

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);

        formData.append(
            "type",
            JSON.stringify(types.map((type) => ({ type })))
        );

        formData.append(
            "projectStacks",
            JSON.stringify(stacks.map((name) => ({ name })))
        );

        formData.append(
            "sourceMeta",
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
            const response = await addProjects(formData);

            if (response.status === "error") {
                setSubmitted(false);
                toast.error(response.message);
            }
            setSubmitted(true);

            setTitle("");
            setDescription("");
            setTypes([]);
            setStacks([]);

            setSources([
                {
                    id: nextSourceId(),
                    title: "",
                    description: "",
                    imgFile: null,
                    previewUrl: null,
                },
            ]);
            toast.success(response.message);
        } catch (error) {
            console.error(error);
            setSubmitted(false);
        } finally {
            setSubmitting(false);
        }
    };

    // const payload: ProjectPayload = useMemo(
    //     () => ({
    //         title,
    //         description,
    //         source: sources.map((s) => ({
    //             title: s.title,
    //             description: s.description,
    //             imgUrl: s.imgFile ? `<uploads/${s.imgFile.name}>` : "",
    //         })),
    //         type: types.map((t) => ({ type: t })),
    //         projectStacks: stacks.map((n) => ({ name: n })),
    //     }),
    //     [title, description, sources, types, stacks]
    // );

    return (
        <div className={`min-h-full w-full ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"}`}>
            <div className="w-full p-3 sm:p-4 md:p-8">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className={`mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">Control Panel</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>add project</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="mb-8 sm:mb-10">
                        <h1 className={`mb-1.5 text-2xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                            Add a project
                        </h1>
                        <p className={`text-sm ${isDarkMode ? "text-[#6B7280]" : "text-gray-500"}`}>
                            Fill in the details below — screenshots upload directly and get swapped for hosted URLs once you publish.
                        </p>
                    </div>

                    <section className="mb-8 sm:mb-10 w-full">
                        <div className="mb-4 flex items-center gap-2.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B8DEF] text-[11px] font-semibold text-white">
                                1
                            </span>
                            <h2 className={`text-sm font-medium ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                Basics
                            </h2>
                        </div>
                        <div className="w-full space-y-4 pl-8">
                            <div className="w-full">
                                <FieldLabel>Title</FieldLabel>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Portfolio Website"
                                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none ${isDarkMode
                                        ? "border-[#232838] bg-[#0A0A0A] text-white placeholder:text-[#4B5468] focus:border-[#3A4256]"
                                        : "border-gray-300 bg-white text-black placeholder:text-gray-400 focus:border-gray-500"
                                        }`}
                                />
                            </div>
                            <div className="w-full">
                                <FieldLabel>Description</FieldLabel>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="A modern portfolio website built with React and Express."
                                    rows={3}
                                    className={`w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none ${isDarkMode
                                        ? "border-[#232838] bg-[#0A0A0A] text-white placeholder:text-[#4B5468] focus:border-[#3A4256]"
                                        : "border-gray-300 bg-white text-black placeholder:text-gray-400 focus:border-gray-500"
                                        }`}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 sm:mb-10 w-full">
                        <div className="mb-4 flex items-center gap-2.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B8DEF] text-[11px] font-semibold text-white">
                                2
                            </span>
                            <h2 className={`text-sm font-medium ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                Classification
                            </h2>
                        </div>
                        <div className="w-full space-y-5 pl-8">
                            <div className="w-full">
                                <FieldLabel hint="pick or add your own">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Tag size={11} /> Type
                                    </span>
                                </FieldLabel>
                                <TagInput
                                    values={types}
                                    onAdd={(v) => setTypes((p) => [...p, v])}
                                    onRemove={(v) => setTypes((p) => p.filter((x) => x !== v))}
                                    suggestions={TYPE_SUGGESTIONS}
                                    placeholder="automation, web app…"
                                    tone="type"
                                    isDisabled={true}
                                />
                            </div>
                            <div className="w-full">
                                <FieldLabel hint="pick or add your own">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Layers size={11} /> Project stacks
                                    </span>
                                </FieldLabel>
                                <TagInput
                                    values={stacks}
                                    onAdd={(v) => setStacks((p) => [...p, v])}
                                    onRemove={(v) => setStacks((p) => p.filter((x) => x !== v))}
                                    suggestions={STACK_SUGGESTIONS}
                                    placeholder="React, Prisma…"
                                    tone="stack"
                                    isDisabled={false}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 sm:mb-10 w-full">
                        <div className="mb-4 flex items-center gap-2.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B8DEF] text-[11px] font-semibold text-white">
                                3
                            </span>
                            <h2 className={`text-sm font-medium ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                Screenshots
                            </h2>
                            <span className={`ml-auto font-mono text-[11px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                {sources.length} item{sources.length === 1 ? "" : "s"}
                            </span>
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
                    </section>

                    {/* Submit */}
                    <div className={`flex w-full flex-col gap-3 border-t pt-6 ${isDarkMode ? "border-[#1A1F2B]" : "border-gray-200"}`}>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full rounded-lg bg-[#5B8DEF] px-5 py-3 text-sm font-medium text-white transition enabled:hover:bg-[#79A2F5] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            {submitting ? "Publishing…" : "Publish project"}
                        </button>
                        <div className="flex flex-col gap-1">
                            {submitted === true && (
                                <span className="font-mono text-[11px] text-[#7FD9BB]">
                                    Publishing Success ✓
                                </span>
                            )}
                            {submitted === false && (
                                <span className="font-mono text-[11px] text-red-500">
                                    Publishing Failed ✗
                                </span>
                            )}
                        </div>
                    </div>
                </form>
                {/* ------------------------------------------------------------ */}
                {/* Live payload preview                                         */}
                {/* ------------------------------------------------------------ */}
                {/* <aside className="h-fit rounded-2xl border border-[#1A1F2B] bg-[#0D1017] lg:sticky lg:top-6">
                    <div className="flex items-center gap-2 border-b border-[#1A1F2B] px-4 py-3">
                        <Terminal size={13} className="text-[#4B5468]" />
                        <span className="font-mono text-[11px] text-[#6B7280]">
                            payload.json
                        </span>
                    </div>
                    <pre className="max-h-[75vh] overflow-auto p-4 font-mono text-[11.5px] leading-relaxed text-[#8FA3C9]">
                        {JSON.stringify(payload, null, 2)}
                    </pre>
                </aside> */}
            </div>
        </div>
    );
}
