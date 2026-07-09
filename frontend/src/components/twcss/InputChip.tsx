import { useState } from "react";
import { X } from "lucide-react";
import useTheme from "../hooks/useTheme";
function Chip({
    label,
    onRemove,
    tone = "stack",
}: {
    label: string;
    onRemove: () => void;
    tone?: "stack" | "type";
}) {
    const toneClasses =
        tone === "stack"
            ? "border-[#2C5B4F] bg-[#12241F] text-[#7FD9BB]"
            : "border-[#5B4A28] bg-[#221B0E] text-[#E8B563]";
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${toneClasses}`}
        >
            {label}
            <button
                type="button"
                onClick={onRemove}
                className="rounded-full p-0.5 text-current/70 transition hover:bg-white/10"
                aria-label={`Remove ${label}`}
            >
                <X size={11} />
            </button>
        </span>
    );
}

export function TagInput({
    values,
    onAdd,
    onRemove,
    suggestions,
    placeholder,
    tone,
    isDisabled,
}: {
    values: string[];
    onAdd: (v: string) => void;
    onRemove: (v: string) => void;
    suggestions: string[];
    placeholder: string;
    tone: "stack" | "type";
    isDisabled: boolean;
}) {
    const [draft, setDraft] = useState("");

    const commit = () => {
        const v = draft.trim();
        if (v && !values.includes(v)) onAdd(v);
        setDraft("");
    };

    const isDarkMode = useTheme();

    const remaining = suggestions.filter((s) => !values.includes(s));

    return (
        <div>
            <div className={`flex flex-wrap items-center gap-2 rounded-lg border border-[#232838] ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} p-3`}>
                {values.map((v) => (
                    <Chip key={v} label={v} tone={tone} onRemove={() => onRemove(v)} />
                ))}
                <input
                    disabled={isDisabled ? (true) : (false)}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === ",") {
                            e.preventDefault();
                            commit();
                        } else if (e.key === "Backspace" && !draft && values.length) {
                            onRemove(values[values.length - 1]);
                        }
                    }}
                    onBlur={commit}
                    placeholder={values.length ? "" : placeholder}
                    className="min-w-[120px] flex-1 bg-transparent py-0.5 text-sm text-[#E6E9EF] placeholder:text-[#4B5468] focus:outline-none"
                />
            </div>
            {remaining.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                    {remaining.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => onAdd(s)}
                            className="rounded-full border border-dashed border-[#2A3040] px-2.5 py-1 font-mono text-[11px] text-[#6B7280] transition hover:border-[#3A4256] hover:text-[#9CA3AF]"
                        >
                            + {s}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
{/* <TagInput
    values={stacks}
    onAdd={(v) => setStacks((p) => [...p, v])}
    onRemove={(v) => setStacks((p) => p.filter((x) => x !== v))}
    suggestions={STACK_SUGGESTIONS}
    placeholder="React, Prisma…"
    tone="stack"
    isDisabled={false}
/> */}