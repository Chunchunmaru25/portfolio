import { useEffect, useState } from "react";
import { Plus, X, Trash2, Pencil, Check, FileText, Calendar } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { addEducationDescription, deleteEducation, deleteEducationDescription, getEducation, updateEducation, updateEducationDescription } from "../../components/services/education";
import { useNavigate } from "react-router";
import { WebRoute } from "../../routes/web.route";
// ======================
// Types (mirrors Prisma schema)
// ======================
export interface EducationDescription {
    id: string;
    description: string | null;
    educationId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Education {
    id: string;
    program: string;
    branch: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    educationDescriptions: EducationDescription[];
}

// ======================
// Dummy data
// ======================
// const DUMMY_DATA: Education[] = [
//     {
//         id: "1",
//         program: "B.S. Computer Science",
//         branch: "Software Engineering",
//         startDate: "2018-06-01T00:00:00Z",
//         endDate: "2022-04-30T00:00:00Z",
//         createdAt: "2026-05-01T09:15:00Z",
//         updatedAt: "2026-06-20T10:05:00Z",
//         educationDescriptions: [
//             {
//                 id: "d1",
//                 description: "Graduated cum laude with a focus on distributed systems.",
//                 educationId: "1",
//                 createdAt: "2026-05-01T09:15:00Z",
//                 updatedAt: "2026-05-01T09:15:00Z",
//             },
//             {
//                 id: "d2",
//                 description: "Led a capstone project building a real-time race-timing platform.",
//                 educationId: "1",
//                 createdAt: "2026-05-01T09:20:00Z",
//                 updatedAt: "2026-05-01T09:20:00Z",
//             },
//         ],
//     },
//     {
//         id: "2",
//         program: "Senior High School — STEM",
//         branch: "Science, Technology, Engineering & Mathematics",
//         startDate: "2016-06-01T00:00:00Z",
//         endDate: "2018-04-30T00:00:00Z",
//         createdAt: "2026-04-12T13:05:00Z",
//         updatedAt: "2026-07-01T09:40:00Z",
//         educationDescriptions: [
//             {
//                 id: "d3",
//                 description: "Consistent honor student across all four semesters.",
//                 educationId: "2",
//                 createdAt: "2026-04-12T13:05:00Z",
//                 updatedAt: "2026-04-12T13:05:00Z",
//             },
//         ],
//     },
// ];

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

type EducationCardProps = {
    dateFormat: AllowedDateFormat;
};
export default function IndexEducation({ dateFormat }: EducationCardProps) {
    const isDarkMode = useTheme();
    const navigate = useNavigate();
    const [records, setRecords] = useState<Education[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getEducation();
                if (response.status === "error") {
                    toast.error(response.message);
                }
                setRecords(response.data ?? []);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        })()
    }, [])

    // ======================
    // Add / delete education
    // ======================
    const handleAddRecord = () => {
        navigate(WebRoute.ADD_EDUCATION);
    };

    const handleDeleteRecord = async (id: string) => {
        if (!window.confirm("Delete this education entry?")) return;
        const response = await deleteEducation(id);
        if (response.status === "error") {
            toast.error(response.messageS);
        }
        setRecords((prev) => prev.filter((r) => r.id !== id));
        toast.success(response.message);
    };

    // ======================
    // Header fields (program / branch / dates)
    // ======================
    const handleUpdateHeader = async (
        id: string,
        fields: { program: string; branch: string; startDate: string; endDate: string }
    ) => {
        const response = await updateEducation(id, fields);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) => (r.id === id ? { ...r, ...fields, updatedAt: new Date().toISOString() } : r))
        );
        toast.success(response.message);
    };

    // ======================
    // Descriptions
    // ======================
    const handleAddDescription = async (educationId: string, description: string) => {
        const now = new Date().toISOString();
        const response = await addEducationDescription(educationId, description);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === educationId
                    ? {
                        ...r,
                        educationDescriptions: [
                            ...r.educationDescriptions,
                            { id: genId(), description, educationId, createdAt: now, updatedAt: now },
                        ],
                        updatedAt: now,
                    }
                    : r
            )
        );
        toast.success(response.message);
    };

    const handleUpdateDescription = async (educationId: string, descriptionId: string, description: string) => {
        const now = new Date().toISOString();
        const response = await updateEducationDescription(descriptionId, description);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === educationId
                    ? {
                        ...r,
                        educationDescriptions: r.educationDescriptions.map((d) =>
                            d.id === descriptionId ? { ...d, description, updatedAt: now } : d
                        ),
                        updatedAt: now,
                    }
                    : r
            )
        );
        toast.success(response.message);
    };

    const handleDeleteDescription = async (educationId: string, descriptionId: string) => {
        if (!window.confirm("Delete this description?")) return;
        const response = await deleteEducationDescription(descriptionId);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) =>
                r.id === educationId
                    ? {
                        ...r,
                        educationDescriptions: r.educationDescriptions.filter((d) => d.id !== descriptionId),
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
                            EDUCATION
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
                            <Plus size={13} /> Add entry
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex w-full flex-col gap-4">
                    {records.map((record) => (
                        <EducationEntryCard
                            dateFormat={dateFormat}
                            key={record.id}
                            record={record}
                            isDarkMode={isDarkMode}
                            onUpdateHeader={(fields) => handleUpdateHeader(record.id, fields)}
                            onDeleteRecord={() => handleDeleteRecord(record.id)}
                            onAddDescription={(d) => handleAddDescription(record.id, d)}
                            onUpdateDescription={(descId, d) => handleUpdateDescription(record.id, descId, d)}
                            onDeleteDescription={(descId) => handleDeleteDescription(record.id, descId)}
                        />
                    ))}

                    {records.length === 0 && (
                        <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                            No education entries found.
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
interface EducationEntryCardProps {
    dateFormat: AllowedDateFormat;
    record: Education;
    isDarkMode: boolean;
    onUpdateHeader: (fields: { program: string; branch: string; startDate: string; endDate: string }) => void;
    onDeleteRecord: () => void;
    onAddDescription: (description: string) => void;
    onUpdateDescription: (descriptionId: string, description: string) => void;
    onDeleteDescription: (descriptionId: string) => void;
}

function EducationEntryCard({
    dateFormat,
    record,
    isDarkMode,
    onUpdateHeader,
    onDeleteRecord,
    onAddDescription,
    onUpdateDescription,
    onDeleteDescription,
}: EducationEntryCardProps) {
    const [isEditingHeader, setIsEditingHeader] = useState(false);
    const [draftProgram, setDraftProgram] = useState(record.program);
    const [draftBranch, setDraftBranch] = useState(record.branch);
    const [draftStartDate, setDraftStartDate] = useState(record.startDate.slice(0, 10));
    const [draftEndDate, setDraftEndDate] = useState(record.endDate.slice(0, 10));

    const [editingDescriptionId, setEditingDescriptionId] = useState<string | null>(null);
    const [draftDescription, setDraftDescription] = useState("");

    const [isAdding, setIsAdding] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    // ======================
    // Header
    // ======================
    const handleStartEditHeader = () => {
        setDraftProgram(record.program);
        setDraftBranch(record.branch);
        setDraftStartDate(record.startDate.slice(0, 10));
        setDraftEndDate(record.endDate.slice(0, 10));
        setIsEditingHeader(true);
    };

    const handleConfirmHeader = () => {
        if (!draftProgram.trim()) {
            toast.error("Program is required");
            return;
        }
        onUpdateHeader({
            program: draftProgram.trim(),
            branch: draftBranch.trim(),
            startDate: new Date(draftStartDate).toISOString(),
            endDate: new Date(draftEndDate).toISOString(),
        });
        setIsEditingHeader(false);
    };

    // ======================
    // Add description
    // ======================
    const handleStartAdd = () => {
        setIsAdding(true);
        setNewDescription("");
    };

    const handleConfirmAdd = () => {
        if (!newDescription.trim()) {
            toast.error("Description is required");
            return;
        }
        onAddDescription(newDescription.trim());
        setIsAdding(false);
    };

    // ======================
    // Update description
    // ======================
    const handleStartEditDescription = (desc: EducationDescription) => {
        setEditingDescriptionId(desc.id);
        setDraftDescription(desc.description ?? "");
    };

    const handleConfirmEditDescription = (descriptionId: string) => {
        if (!draftDescription.trim()) {
            toast.error("Description is required");
            return;
        }
        onUpdateDescription(descriptionId, draftDescription.trim());
        setEditingDescriptionId(null);
    };

    return (
        <div
            className={`w-full rounded-2xl border p-5 sm:p-6 ${isDarkMode ? "border-[#1A1F2B] bg-[#0D1017]" : "border-gray-200 bg-white"}`}
        >
            {/* Header: program / branch / dates */}
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                    {isEditingHeader ? (
                        <div className="flex flex-col gap-2">
                            <input
                                autoFocus
                                value={draftProgram}
                                onChange={(e) => setDraftProgram(e.target.value)}
                                placeholder="Program"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-lg font-semibold outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                            />
                            <input
                                value={draftBranch}
                                onChange={(e) => setDraftBranch(e.target.value)}
                                placeholder="Branch"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#8FA3C9]" : "border-gray-200 text-gray-600"}`}
                            />
                            <div className="flex flex-wrap items-center gap-2">
                                <input
                                    type="date"
                                    value={draftStartDate}
                                    onChange={(e) => setDraftStartDate(e.target.value)}
                                    className={`rounded-md border bg-transparent px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                />
                                <span className={`text-xs ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>to</span>
                                <input
                                    type="date"
                                    value={draftEndDate}
                                    onChange={(e) => setDraftEndDate(e.target.value)}
                                    className={`rounded-md border bg-transparent px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                />
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
                        <>
                            <h2 className={`text-lg font-semibold ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                                {record.program}
                            </h2>
                            {record.branch && (
                                <p className={`text-sm ${isDarkMode ? "text-[#8FA3C9]" : "text-gray-600"}`}>
                                    {record.branch}
                                </p>
                            )}
                            <div className={`mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                <Calendar size={11} />
                                <span>
                                    {dateFormat === 'day' ? (
                                        <>
                                            {formatDateDay(record.startDate)} — {formatDateDay(record.endDate)}
                                        </>
                                    ) : (
                                        <>
                                            {formatDateMonth(record.startDate)} — {formatDateMonth(record.endDate)}
                                        </>
                                    )}
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                    {!isEditingHeader && (
                        <button
                            type="button"
                            onClick={handleStartEditHeader}
                            title="Edit education"
                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                        >
                            <Pencil size={14} />
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onDeleteRecord}
                        title="Delete education"
                        className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
                    >
                        <Trash2 size={15} />
                    </button>
                </div>
            </div>

            {/* Descriptions */}
            <div className={`mb-2 flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-wide ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                <span className="flex items-center gap-1.5">
                    <FileText size={11} />
                    Descriptions ({record.educationDescriptions.length})
                </span>
                <button
                    type="button"
                    onClick={handleStartAdd}
                    className={`flex items-center gap-1 normal-case transition ${isDarkMode ? "text-[#5B8DEF] hover:text-[#79A2F5]" : "text-blue-600 hover:text-blue-500"}`}
                >
                    <Plus size={11} /> Add
                </button>
            </div>

            <div className="flex flex-col gap-2">
                {record.educationDescriptions.map((desc, index) => {
                    const isEditing = editingDescriptionId === desc.id;
                    return (
                        <div
                            key={desc.id}
                            className={`group flex items-start gap-2 rounded-lg border px-3 py-2 ${isDarkMode ? "border-[#232838] bg-[#0A0A0A]" : "border-gray-200 bg-gray-50"}`}
                        >
                            <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${isDarkMode ? "bg-[#1A1F2B] text-[#9CB8F0]" : "bg-blue-50 text-blue-600"}`}
                            >
                                {index + 1}
                            </span>

                            {isEditing ? (
                                <textarea
                                    autoFocus
                                    value={draftDescription}
                                    onChange={(e) => setDraftDescription(e.target.value)}
                                    rows={2}
                                    className={`w-full resize-none rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                />
                            ) : (
                                <p className={`flex-1 text-sm ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                    {desc.description}
                                </p>
                            )}

                            <div className="flex shrink-0 items-center gap-1">
                                {isEditing ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleConfirmEditDescription(desc.id)}
                                            title="Save"
                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                                        >
                                            <Check size={14} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setEditingDescriptionId(null)}
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
                                            onClick={() => handleStartEditDescription(desc)}
                                            title="Edit description"
                                            className={`rounded-lg p-1.5  ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                                        >
                                            <Pencil size={13} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => onDeleteDescription(desc.id)}
                                            title="Delete description"
                                            className={`rounded-lg p-1.5  ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
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
                        className={`flex items-start gap-2 rounded-lg border border-dashed px-3 py-2 ${isDarkMode ? "border-[#3A4256] bg-[#0A0A0A]" : "border-gray-300 bg-gray-50"}`}
                    >
                        <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${isDarkMode ? "bg-[#1A1F2B] text-[#7FD9BB]" : "bg-emerald-50 text-emerald-600"}`}
                        >
                            +
                        </span>
                        <textarea
                            autoFocus
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            rows={2}
                            placeholder="New description…"
                            className={`w-full resize-none rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                        />
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
                {!isAdding && record.educationDescriptions.length === 0 && (
                    <div className={`rounded-lg border border-dashed px-3 py-4 text-center font-mono text-[11px] ${isDarkMode ? "border-[#232838] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                        No descriptions yet.
                    </div>
                )}
            </div>
        </div>
    );
}