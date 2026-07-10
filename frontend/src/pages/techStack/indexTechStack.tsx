import { useEffect, useState } from "react";
import { Plus, X, Trash2, Pencil, Check, Tags } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import {
    addTypeTechStack,
    deleteTechStack,
    deleteTypeTechStack,
    getTechStack,
    updateTechStack,
    updateTypeTechStack,
} from "../../components/services/techStack";
import { useNavigate } from "react-router";
import { WebRoute } from "../../routes/web.route";
import axios from "axios";
// ======================
// Types (mirrors Prisma schema)
// ======================
export interface TechStackType {
    id: string;
    type: string;
    techStackId: string;
    createdAt: string;
    updatedAt: string;
}

export interface TechStack {
    id: string;
    stack: string;
    bgColor: string;
    imgUrl: string;
    createdAt: string;
    updatedAt: string;
    techstacktype: TechStackType[];
}

// ======================
// Dummy data
// ======================
// const DUMMY_DATA: TechStack[] = [
//     {
//         id: "1",
//         stack: "React",
//         bgColor: "#61DAFB",
//         imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//         createdAt: "2026-05-01T09:15:00Z",
//         updatedAt: "2026-06-20T10:05:00Z",
//         techstacktype: [
//             { id: "t1", type: "frontend", techStackId: "1", createdAt: "2026-05-01T09:15:00Z", updatedAt: "2026-05-01T09:15:00Z" },
//         ],
//     },
// ];

// ======================
// Fixed type choices — no free text, only these are assignable
// ======================
const TYPE_OPTIONS = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "databaseandserver", label: "Database And Server" },
    { key: "developmenttools", label: "Development Tools" },
    { key: "templateanddesign", label: "Template And Design" },
];
const TYPE_LABEL: Record<string, string> = Object.fromEntries(
    TYPE_OPTIONS.map((t) => [t.key, t.label])
);

const formatDateMonth = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
    });

const formatDateDay = (iso: string) =>
    new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

const genId = () => Math.random().toString(36).slice(2, 9);

type AllowedDateFormat = "day" | "month";

type TechStackCardProps = {
    dateFormat: AllowedDateFormat;
    title: string;
};

export default function IndexTechStack({ dateFormat, title }: TechStackCardProps) {
    const isDarkMode = useTheme();
    const navigate = useNavigate();
    const [records, setRecords] = useState<TechStack[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getTechStack();
                if (response.status === "error") {
                    toast.error(response.message);
                }
                setRecords(response.data ?? []);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    toast.error(error.response?.data?.message ?? "Request failed");
                } else if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error("Unknown error");
                }
            }
        })();
    }, []);

    // ======================
    // Add / delete tech stack
    // ======================
    const handleAddRecord = () => {
        navigate(WebRoute.ADD_TECH_STACK);
    };

    const handleDeleteRecord = async (id: string) => {
        if (!window.confirm("Delete this tech stack entry?")) return;
        const response = await deleteTechStack(id);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) => prev.filter((r) => r.id !== id));
        toast.success(response.message);
    };

    // ======================
    // Header fields (stack / color / imgUrl)
    // ======================
    const handleUpdateHeader = async (
        id: string,
        fields: { stack: string; color: string; imgUrl: string }
    ) => {
        const response = await updateTechStack(id, fields);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === id
                    ? { ...r, stack: fields.stack, bgColor: fields.color, imgUrl: fields.imgUrl, updatedAt: new Date().toISOString() }
                    : r
            )
        );
        toast.success(response.message);
    };

    // ======================
    // Types (techstacktype) — fixed values only
    // ======================
    const handleAddType = async (techStackId: string, type: string) => {
        const now = new Date().toISOString();
        const response = await addTypeTechStack(techStackId, type);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === techStackId
                    ? {
                        ...r,
                        techstacktype: [
                            ...r.techstacktype,
                            { id: genId(), type, techStackId, createdAt: now, updatedAt: now },
                        ],
                        updatedAt: now,
                    }
                    : r
            )
        );
        toast.success(response.message);
    };

    const handleUpdateType = async (techStackId: string, techTypeId: string, type: string) => {
        const now = new Date().toISOString();
        const response = await updateTypeTechStack(techTypeId, type);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === techStackId
                    ? {
                        ...r,
                        techstacktype: r.techstacktype.map((t) =>
                            t.id === techTypeId ? { ...t, type, updatedAt: now } : t
                        ),
                        updatedAt: now,
                    }
                    : r
            )
        );
        toast.success(response.message);
    };

    const handleDeleteType = async (techStackId: string, techTypeId: string) => {
        if (!window.confirm("Remove this type?")) return;
        const response = await deleteTypeTechStack(techTypeId);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === techStackId
                    ? {
                        ...r,
                        techstacktype: r.techstacktype.filter((t) => t.id !== techTypeId),
                        updatedAt: new Date().toISOString(),
                    }
                    : r
            )
        );
        toast.success(response.message);
    };

    return (
        <div className={`min-h-full w-full ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"}`}>
            <div className="w-full p-3 sm:p-4 md:p-8">
                {/* Header */}
                <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
                    <div>
                        <h1 className={`mb-1.5 text-2xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                            {title}
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`font-mono text-[11px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                            {records.length} entr{records.length === 1 ? "y" : "ies"}
                        </span>
                        <button
                            type="button"
                            onClick={handleAddRecord}
                            className="flex items-center gap-1.5 rounded-lg bg-[#5B8DEF] px-3.5 py-2 text-xs font-medium text-white transition hover:bg-[#79A2F5]"
                        >
                            <Plus size={13} /> Add {title}
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex w-full flex-col gap-4">
                    {records.map((record) => (
                        <TechStackEntryCard
                            dateFormat={dateFormat}
                            key={record.id}
                            record={record}
                            isDarkMode={isDarkMode}
                            onUpdateHeader={(fields) => handleUpdateHeader(record.id, fields)}
                            onDeleteRecord={() => handleDeleteRecord(record.id)}
                            onAddType={(type) => handleAddType(record.id, type)}
                            onUpdateType={(techTypeId, type) => handleUpdateType(record.id, techTypeId, type)}
                            onDeleteType={(techTypeId) => handleDeleteType(record.id, techTypeId)}
                        />
                    ))}

                    {records.length === 0 && (
                        <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                            No tech stack entries found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ======================
// Individual card
// ======================
interface TechStackEntryCardProps {
    dateFormat: AllowedDateFormat;
    record: TechStack;
    isDarkMode: boolean;
    onUpdateHeader: (fields: { stack: string; color: string; imgUrl: string }) => void;
    onDeleteRecord: () => void;
    onAddType: (type: string) => void;
    onUpdateType: (techTypeId: string, type: string) => void;
    onDeleteType: (techTypeId: string) => void;
}

function TechStackEntryCard({
    dateFormat,
    record,
    isDarkMode,
    onUpdateHeader,
    onDeleteRecord,
    onAddType,
    onUpdateType,
    onDeleteType,
}: TechStackEntryCardProps) {
    const [isEditingHeader, setIsEditingHeader] = useState(false);
    const [draftStack, setDraftStack] = useState(record.stack);
    const [draftColor, setDraftColor] = useState(record.bgColor);
    const [draftImgUrl, setDraftImgUrl] = useState(record.imgUrl);

    const [editingTypeId, setEditingTypeId] = useState<string | null>(null);
    const [draftType, setDraftType] = useState("");

    const [isAdding, setIsAdding] = useState(false);
    const [newType, setNewType] = useState("");

    const assignedKeys = record.techstacktype.map((t) => t.type);
    const availableForAdd = TYPE_OPTIONS.filter((o) => !assignedKeys.includes(o.key));

    // ======================
    // Header
    // ======================
    const handleStartEditHeader = () => {
        setDraftStack(record.stack);
        setDraftColor(record.bgColor);
        setDraftImgUrl(record.imgUrl);
        setIsEditingHeader(true);
    };

    const handleConfirmHeader = () => {
        if (!draftStack.trim()) {
            toast.error("Stack name is required");
            return;
        }
        onUpdateHeader({ stack: draftStack.trim(), color: draftColor, imgUrl: draftImgUrl.trim() });
        setIsEditingHeader(false);
    };

    // ======================
    // Add type
    // ======================
    const handleStartAdd = () => {
        if (availableForAdd.length === 0) {
            toast.error("All types are already assigned");
            return;
        }
        setNewType(availableForAdd[0].key);
        setIsAdding(true);
    };

    const handleConfirmAdd = () => {
        if (!newType) {
            toast.error("Type is required");
            return;
        }
        onAddType(newType);
        setIsAdding(false);
    };

    // ======================
    // Update type
    // ======================
    const handleStartEditType = (t: TechStackType) => {
        setEditingTypeId(t.id);
        setDraftType(t.type);
    };

    const handleConfirmEditType = (techTypeId: string) => {
        if (!draftType) {
            toast.error("Type is required");
            return;
        }
        onUpdateType(techTypeId, draftType);
        setEditingTypeId(null);
    };

    return (
        <div
            className={`w-full rounded-2xl border p-5 sm:p-6 ${isDarkMode ? "border-[#1A1F2B] bg-[#0D1017]" : "border-gray-200 bg-white"}`}
        >
            {/* Header: icon / stack / color */}
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 gap-3">
                    <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: record.bgColor }}
                    >
                        {record.imgUrl && (
                            record.imgUrl.trim().startsWith("<svg") ? (
                                <span
                                    className="h-6 w-6 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:object-contain"
                                    dangerouslySetInnerHTML={{ __html: record.imgUrl }}
                                />
                            ) : (
                                <img
                                    src={record.imgUrl}
                                    alt={record.stack}
                                    className="h-6 w-6 object-contain"
                                />
                            )
                        )}
                    </div>

                    {isEditingHeader ? (
                        <div className="flex flex-1 flex-col gap-2">
                            <input
                                autoFocus
                                value={draftStack}
                                onChange={(e) => setDraftStack(e.target.value)}
                                placeholder="Stack name"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-lg font-semibold outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                            />
                            <input
                                value={draftImgUrl}
                                onChange={(e) => setDraftImgUrl(e.target.value)}
                                placeholder="Icon URL"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#8FA3C9]" : "border-gray-200 text-gray-600"}`}
                            />
                            <div className="flex flex-wrap items-center gap-2">
                                <input
                                    type="color"
                                    value={draftColor}
                                    onChange={(e) => setDraftColor(e.target.value)}
                                    className="h-8 w-9 shrink-0 cursor-pointer rounded-md border border-[#232838] bg-transparent p-1"
                                />
                                <span className={`text-xs ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>{draftColor}</span>
                                <button
                                    type="button"
                                    onClick={handleConfirmHeader}
                                    title="Save"
                                    className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                                >
                                    <Check size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditingHeader(false)}
                                    title="Cancel"
                                    className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-400 hover:bg-gray-100"}`}
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="min-w-0">
                            <h2 className={`truncate text-lg font-semibold ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                                {record.stack}
                            </h2>
                            <div className={`mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                <span>{record.bgColor}</span>
                                <span>·</span>
                                <span>
                                    {dateFormat === "day" ? formatDateDay(record.updatedAt) : formatDateMonth(record.updatedAt)}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                    {!isEditingHeader && (
                        <button
                            type="button"
                            onClick={handleStartEditHeader}
                            title="Edit tech stack"
                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                        >
                            <Pencil size={14} />
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onDeleteRecord}
                        title="Delete tech stack"
                        className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
                    >
                        <Trash2 size={15} />
                    </button>
                </div>
            </div>

            {/* Types */}
            <div className={`mb-2 flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-wide ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                <span className="flex items-center gap-1.5">
                    <Tags size={11} />
                    Types ({record.techstacktype.length})
                </span>
                <button
                    type="button"
                    onClick={handleStartAdd}
                    className={`flex items-center gap-1 normal-case transition ${isDarkMode ? "text-[#5B8DEF] hover:text-[#79A2F5]" : "text-blue-600 hover:text-blue-500"}`}
                >
                    <Plus size={11} /> Add
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {record.techstacktype.map((t) => {
                    const isEditing = editingTypeId === t.id;
                    return (
                        <div
                            key={t.id}
                            className={`group flex items-center gap-1.5 rounded-lg border px-3 py-2 ${isDarkMode ? "border-[#232838] bg-[#0A0A0A]" : "border-gray-200 bg-gray-50"}`}
                        >
                            {isEditing ? (
                                // Fixed value only — dropdown, no free text
                                <select
                                    autoFocus
                                    value={draftType}
                                    onChange={(e) => setDraftType(e.target.value)}
                                    className={`rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                >
                                    <option value={t.type}>{TYPE_LABEL[t.type] || t.type}</option>
                                    {TYPE_OPTIONS.filter((o) => o.key !== t.type && !assignedKeys.includes(o.key)).map((o) => (
                                        <option key={o.key} value={o.key}>
                                            {o.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <span className={`text-sm ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                    {TYPE_LABEL[t.type] || t.type}
                                </span>
                            )}

                            <div className="flex shrink-0 items-center gap-1">
                                {isEditing ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleConfirmEditType(t.id)}
                                            title="Save"
                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                                        >
                                            <Check size={14} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setEditingTypeId(null)}
                                            title="Cancel"
                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-400 hover:bg-gray-100"}`}
                                        >
                                            <X size={14} />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleStartEditType(t)}
                                            title="Change type"
                                            className={`rounded-lg p-1.5 ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                                        >
                                            <Pencil size={13} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => onDeleteType(t.id)}
                                            title="Remove type"
                                            className={`rounded-lg p-1.5 ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
                                        >
                                            <Trash2 size={13} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Add new */}
                {isAdding && (
                    <div
                        className={`flex items-center gap-1.5 rounded-lg border border-dashed px-3 py-2 ${isDarkMode ? "border-[#3A4256] bg-[#0A0A0A]" : "border-gray-300 bg-gray-50"}`}
                    >
                        {/* Fixed value only — dropdown, no free text */}
                        <select
                            autoFocus
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                            className={`rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                        >
                            {availableForAdd.map((o) => (
                                <option key={o.key} value={o.key}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                        <div className="flex shrink-0 items-center gap-1">
                            <button
                                type="button"
                                onClick={handleConfirmAdd}
                                title="Save"
                                className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                            >
                                <Check size={14} />
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsAdding(false)}
                                title="Cancel"
                                className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-400 hover:bg-gray-100"}`}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Empty state */}
                {!isAdding && record.techstacktype.length === 0 && (
                    <div className={`w-full rounded-lg border border-dashed px-3 py-4 text-center font-mono text-[11px] ${isDarkMode ? "border-[#232838] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                        No types assigned yet.
                    </div>
                )}
            </div>
        </div>
    );
}