import { useRef } from "react";
import {
    ImagePlus,
    Trash2,
} from "lucide-react";
import useTheme from "../hooks/useTheme";
interface SourceItem {
    id: string;
    title: string;
    description: string;
    imgFile: File | null;
    previewUrl: string | null;
}

export default function SourceCard({
    index,
    item,
    onChange,
    onRemove,
    canRemove,
}: {
    index: number;
    item: SourceItem;
    onChange: (patch: Partial<SourceItem>) => void;
    onRemove: () => void;
    canRemove: boolean;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File | undefined) => {
        if (!file) return;
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
        onChange({ imgFile: file, previewUrl: URL.createObjectURL(file) });
    };
    const isDarkMode = useTheme();

    return (
        <div className={`group relative rounded-xl border border-[#232838] ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} p-4`}>
            <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#4B5468]">
                    frame_{String(index + 1).padStart(2, "0")}
                </span>
                {canRemove && (
                    <button
                        type="button"
                        onClick={onRemove}
                        className="rounded p-1 text-[#4B5468] transition hover:bg-[#1A1F2B] hover:text-[#E27A6C]"
                        aria-label="Remove source item"
                    >
                        <Trash2 size={14} />
                    </button>
                )}
            </div>

            <div className="grid gap-3 sm:grid-cols-[128px_1fr]">
                {/* Upload / preview */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-[#2A3040] ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} transition hover:border-[#3A4256] sm:aspect-square`}
                >
                    {item.previewUrl ? (
                        <img
                            src={item.previewUrl}
                            alt={item.title || "Preview"}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <span className="flex flex-col items-center gap-1 text-[#4B5468]">
                            <ImagePlus size={18} />
                            <span className="font-mono text-[10px]">upload</span>
                        </span>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files?.[0])}
                    />
                </button>

                <div className="flex flex-col gap-2">
                    <input
                        value={item.title}
                        onChange={(e) => onChange({ title: e.target.value })}
                        placeholder="Screenshot title, e.g. Homepage"
                        className={`rounded-lg border border-[#232838] ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} px-3 py-2 text-sm text-[#E6E9EF] placeholder:text-[#4B5468] focus:border-[#3A4256] focus:outline-none`}
                    />
                    <textarea
                        value={item.description}
                        onChange={(e) => onChange({ description: e.target.value })}
                        placeholder="Short caption for this view"
                        rows={2}
                        className={`resize-none rounded-lg border border-[#232838] ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} px-3 py-2 text-sm text-[#E6E9EF] placeholder:text-[#4B5468] focus:border-[#3A4256] focus:outline-none`}
                    />
                </div>
            </div>
        </div>
    );
}