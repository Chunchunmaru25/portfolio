import { useState } from "react";
import toast from "react-hot-toast";
import { Plus, X, Trash2, Pencil, Check, FileText, Calendar } from "lucide-react";
import type { ExperienceEntryCardProps, ExperienceDescription } from "../../components/path/interfaces/experienceInterface";
import { formatDateDay, formatDateMonth } from "../../components/path/formatDate";


export default function ExperienceCard({
    dateFormat,
    record,
    isDarkMode,
    onUpdateHeader,
    onDeleteRecord,
    onAddDescription,
    onUpdateDescription,
    onDeleteDescription,
}: ExperienceEntryCardProps) {
    // company
    const [draftCompany, setDraftCompany] = useState(record.company);
    // branch
    const [draftBranch, setDraftBranch] = useState(record.branch);
    // position
    const [draftPosition, setDraftPosition] = useState(record.position);
    // startDate
    const [draftStartDate, setDraftStartDate] = useState(record.startDate.slice(0, 10));
    // endDate
    const [draftEndDate, setDraftEndDate] = useState(record.endDate.slice(0, 10));

    const [isEditingHeader, setIsEditingHeader] = useState(false);
    const [editingDescriptionId, setEditingDescriptionId] = useState<string | null>(null);
    const [draftDescription, setDraftDescription] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    // ======================
    // Header
    // ======================
    const handleStartEditHeader = () => {
        setDraftCompany(record.company);
        setDraftBranch(record.branch);
        setDraftPosition(record.position);

        setDraftStartDate(record.startDate.slice(0, 10));
        setDraftEndDate(record.endDate.slice(0, 10));
        setIsEditingHeader(true);
    };

    const handleConfirmHeader = () => {
        if (!draftCompany.trim()) {
            toast.error("Comapany is required");
            return;
        }
        if (!draftBranch.trim()) {
            toast.error("Branch is required");
            return;
        }
        if (!draftPosition.trim()) {
            toast.error("Position is required");
            return;
        }
        onUpdateHeader({
            company: draftCompany.trim(),
            branch: draftBranch.trim(),
            position: draftPosition.trim(),
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
    const handleStartEditDescription = (desc: ExperienceDescription) => {
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
                                value={draftCompany}
                                onChange={(e) => setDraftCompany(e.target.value)}
                                placeholder="Program"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-lg font-semibold outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                            />
                            <input
                                value={draftBranch}
                                onChange={(e) => setDraftBranch(e.target.value)}
                                placeholder="Branch"
                                className={`w-full rounded-md border bg-transparent px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#8FA3C9]" : "border-gray-200 text-gray-600"}`}
                            />
                            <input
                                value={draftPosition}
                                onChange={(e) => setDraftPosition(e.target.value)}
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
                                {record.company}
                            </h2>
                            {record.branch && (
                                <p className={`text-sm ${isDarkMode ? "text-[#8FA3C9]" : "text-gray-600"}`}>
                                    {record.branch}
                                </p>
                            )}
                            {record.position && (
                                <p className={`text-[10px] ${isDarkMode ? "text-[#8FA3C9]" : "text-gray-600"}`}>
                                    {record.position}
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
                    Descriptions ({record.experienceDescriptions.length})
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
                {record.experienceDescriptions.map((desc, index) => {
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
                {!isAdding && record.experienceDescriptions.length === 0 && (
                    <div className={`rounded-lg border border-dashed px-3 py-4 text-center font-mono text-[11px] ${isDarkMode ? "border-[#232838] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                        No descriptions yet.
                    </div>
                )}
            </div>
        </div>
    );
}