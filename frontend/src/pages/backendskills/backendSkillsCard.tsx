import { useState } from "react";
import { Pencil, Trash2, Check, X, Plus } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { formatDateDay, formatDateMonth } from "../../components/path/formatDate";

/**
 * TechStackCard.tsx
 * -----------------------------------------------------------------------
 * Takes the WHOLE array and renders every record as its own responsive,
 * centered CRUD card in a grid. You call this once — it maps internally.
 *
 * <TechStackCard
 *     dateFormat={dateFormat}
 *     data={records}
 *     onTitle onSubtitle onDescription onImg
 *     onStartDate onEndDate onCreatedAt onUpdatedAt
 *     onUpdateRecord={(id, fields) => handleUpdateRecord(id, fields)}
 *     onDeleteRecord={(id) => handleDeleteRecord(id)}
 *     onCreateRecord={(fields) => handleCreateRecord(fields)}
 * />
 *
 * Per card layout (top -> bottom, all centered):
 *   image -> title -> subtitle -> description
 * Footer (always pinned to the bottom of the card, NOT centered like the
 * rest — left-aligned meta row):
 *   startDate - endDate
 *   createdAt / updatedAt
 * -----------------------------------------------------------------------
 */

export type DateFormat = "day" | "month";

export interface RecordFields {
    id: string;
    title?: string;
    subtitle?: string;
    description?: string | null;
    imgUrl?: string;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    [key: string]: unknown;
}

export interface TechStackCardProps {
    data: RecordFields[];
    dateFormat?: DateFormat;

    onTitle?: boolean;
    onSubtitle?: boolean;
    onDescription?: boolean;
    onImg?: boolean;
    onStartDate?: boolean;
    onEndDate?: boolean;
    onCreatedAt?: boolean;
    onUpdatedAt?: boolean;

    /** Shows a dashed "add new" card at the end that boots straight into create mode */
    showAddCard?: boolean;

    onUpdateRecord?: (id: string, fields: Partial<RecordFields>) => void;
    onDeleteRecord?: (id: string) => void;
    onCreateRecord?: (fields: Partial<RecordFields>) => void;

    emptyLabel?: string;
}

// ======================
// Helpers
// ======================
const formatDate = (iso: string | undefined, mode: DateFormat) => {
    if (!iso) return null;
    return mode === "month" ? formatDateMonth(iso) : formatDateDay(iso);
};

const resolveTitle = (data: RecordFields) =>
    data.title ?? (data.stack as string) ?? (data.skills as string) ?? (data.key as string) ?? (data.program as string) ?? (data.position as string) ?? "";

const resolveSubtitle = (data: RecordFields) =>
    data.subtitle ?? (data.branch as string) ?? (data.company as string) ?? "";

// ======================
// List wrapper — maps the array into a responsive grid of cards
// ======================
export function Card({
    data,
    dateFormat = "day",
    onTitle = false,
    onSubtitle = false,
    onDescription = false,
    onImg = false,
    onStartDate = false,
    onEndDate = false,
    onCreatedAt = false,
    onUpdatedAt = false,
    showAddCard = false,
    onUpdateRecord,
    onDeleteRecord,
    onCreateRecord,
    emptyLabel = "No entries found.",
}: TechStackCardProps) {
    const isDarkMode = useTheme();

    const toggles = { onTitle, onSubtitle, onDescription, onImg, onStartDate, onEndDate, onCreatedAt, onUpdatedAt };

    if (data.length === 0 && !showAddCard) {
        return (
            <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                {emptyLabel}
            </div>
        );
    }

    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((record) => (
                <RecordCard
                    key={record.id}
                    id={record.id}
                    data={record}
                    dateFormat={dateFormat}
                    {...toggles}
                    onUpdate={(fields) => onUpdateRecord?.(record.id, fields)}
                    onDelete={() => onDeleteRecord?.(record.id)}
                />
            ))}

            {showAddCard && (
                <RecordCard
                    key="__new__"
                    id=""
                    data={{ id: "" }}
                    dateFormat={dateFormat}
                    {...toggles}
                    onCreate={(fields) => onCreateRecord?.(fields)}
                />
            )}
        </div>
    );
}

// ======================
// Single record card (internal)
// ======================
interface RecordCardProps {
    id: string;
    data: RecordFields;
    dateFormat: DateFormat;
    onTitle: boolean;
    onSubtitle: boolean;
    onDescription: boolean;
    onImg: boolean;
    onStartDate: boolean;
    onEndDate: boolean;
    onCreatedAt: boolean;
    onUpdatedAt: boolean;
    onUpdate?: (fields: Partial<RecordFields>) => void;
    onDelete?: () => void;
    onCreate?: (fields: Partial<RecordFields>) => void;
}

function RecordCard({
    id,
    data,
    dateFormat,
    onTitle,
    onSubtitle,
    onDescription,
    onImg,
    onStartDate,
    onEndDate,
    onCreatedAt,
    onUpdatedAt,
    onUpdate,
    onDelete,
    onCreate,
}: RecordCardProps) {
    const isDarkMode = useTheme();
    const isNew = !id;

    const [isEditing, setIsEditing] = useState(isNew);
    const [draftTitle, setDraftTitle] = useState(resolveTitle(data));
    const [draftSubtitle, setDraftSubtitle] = useState(resolveSubtitle(data));
    const [draftDescription, setDraftDescription] = useState(data.description ?? "");
    const [draftImgUrl, setDraftImgUrl] = useState(data.imgUrl ?? "");
    const [draftStartDate, setDraftStartDate] = useState(data.startDate ? data.startDate.slice(0, 10) : "");
    const [draftEndDate, setDraftEndDate] = useState(data.endDate ? data.endDate.slice(0, 10) : "");

    const title = resolveTitle(data);
    const subtitle = resolveSubtitle(data);
    const hasDateRow = onStartDate || onEndDate;
    const hasStampRow = onCreatedAt || onUpdatedAt;
    const hasFooter = hasDateRow || hasStampRow;

    const resetDrafts = () => {
        setDraftTitle(resolveTitle(data));
        setDraftSubtitle(resolveSubtitle(data));
        setDraftDescription(data.description ?? "");
        setDraftImgUrl(data.imgUrl ?? "");
        setDraftStartDate(data.startDate ? data.startDate.slice(0, 10) : "");
        setDraftEndDate(data.endDate ? data.endDate.slice(0, 10) : "");
    };

    const handleStartEdit = () => {
        resetDrafts();
        setIsEditing(true);
    };

    const handleCancel = () => {
        if (isNew) return;
        resetDrafts();
        setIsEditing(false);
    };

    const handleSave = () => {
        if (onTitle && !draftTitle.trim()) {
            toast.error("Title is required");
            return;
        }

        const fields: Partial<RecordFields> = {};
        if (onTitle) fields.title = draftTitle.trim();
        if (onSubtitle) fields.subtitle = draftSubtitle.trim();
        if (onDescription) fields.description = draftDescription.trim();
        if (onImg) fields.imgUrl = draftImgUrl.trim();
        if (onStartDate) fields.startDate = draftStartDate ? new Date(draftStartDate).toISOString() : undefined;
        if (onEndDate) fields.endDate = draftEndDate ? new Date(draftEndDate).toISOString() : undefined;

        if (isNew) {
            onCreate?.(fields);
            resetDrafts();
        } else {
            onUpdate?.(fields);
            setIsEditing(false);
        }
    };

    return (
        <div
            className={`group relative flex h-full w-full flex-col rounded-2xl border p-5 sm:p-6 ${isNew
                ? isDarkMode
                    ? "border-dashed border-[#3A4256] bg-transparent"
                    : "border-dashed border-gray-300 bg-transparent"
                : isDarkMode
                    ? "border-[#1A1F2B] bg-[#0D1017]"
                    : "border-gray-200 bg-white"
                }`}
        >
            {/* Edit / delete controls */}
            {!isNew && !isEditing && (
                <div className="absolute right-4 top-4 flex items-center gap-1">
                    <button
                        type="button"
                        onClick={handleStartEdit}
                        title="Edit"
                        className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                    >
                        <Pencil size={14} />
                    </button>
                    <button
                        type="button"
                        onClick={onDelete}
                        title="Delete"
                        className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            )}

            {/* Centered content block */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
                {isEditing ? (
                    <div className="flex w-full flex-col items-center gap-3">
                        {onImg && (
                            <>
                                <input
                                    value={draftImgUrl}
                                    onChange={(e) => setDraftImgUrl(e.target.value)}
                                    placeholder="Image URL"
                                    className={`w-full max-w-xs rounded-md border bg-transparent px-2.5 py-1.5 text-center text-xs outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                />
                            </>
                        )}
                        {onTitle && (
                            <input
                                autoFocus
                                value={draftTitle}
                                onChange={(e) => setDraftTitle(e.target.value)}
                                placeholder="Title"
                                className={`w-full max-w-xs rounded-md border bg-transparent px-2.5 py-1.5 text-center text-base font-semibold outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                            />
                        )}
                        {onSubtitle && (
                            <input
                                value={draftSubtitle}
                                onChange={(e) => setDraftSubtitle(e.target.value)}
                                placeholder="Subtitle"
                                className={`w-full max-w-xs rounded-md border bg-transparent px-2.5 py-1.5 text-center text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#8FA3C9]" : "border-gray-200 text-gray-600"}`}
                            />
                        )}
                        {onDescription && (
                            <textarea
                                value={draftDescription ?? ""}
                                onChange={(e) => setDraftDescription(e.target.value)}
                                rows={3}
                                placeholder="Description"
                                className={`w-full max-w-xs resize-none rounded-md border bg-transparent px-2.5 py-1.5 text-center text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#C4C9D4]" : "border-gray-200 text-gray-700"}`}
                            />
                        )}
                        {hasDateRow && (
                            <div className="flex w-full max-w-xs items-center justify-center gap-2">
                                {onStartDate && (
                                    <input
                                        type="date"
                                        value={draftStartDate}
                                        onChange={(e) => setDraftStartDate(e.target.value)}
                                        className={`flex-1 rounded-md border bg-transparent px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                    />
                                )}
                                {onStartDate && onEndDate && (
                                    <span className={`text-xs ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>to</span>
                                )}
                                {onEndDate && (
                                    <input
                                        type="date"
                                        value={draftEndDate}
                                        onChange={(e) => setDraftEndDate(e.target.value)}
                                        className={`flex-1 rounded-md border bg-transparent px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                    />
                                )}
                            </div>
                        )}

                        <div className="mt-1 flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleSave}
                                title="Save"
                                className="flex items-center gap-1.5 rounded-lg bg-[#5B8DEF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition enabled:active:scale-[0.99] hover:bg-[#79A2F5]"
                            >
                                {isNew ? <Plus size={13} /> : <Check size={13} />}
                                {isNew ? "Create" : "Save"}
                            </button>
                            {!isNew && (
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    title="Cancel"
                                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-500 hover:bg-gray-100"}`}
                                >
                                    <X size={13} /> Cancel
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        {onImg && data.imgUrl && (
                            data.imgUrl.trim().startsWith("<svg") ? (
                                <div
                                    className="mx-auto h-16 w-16"
                                    dangerouslySetInnerHTML={{ __html: data.imgUrl }}
                                />
                            ) : (
                                <img
                                    src={data.imgUrl}
                                    alt={title || "image"}
                                    className="mx-auto h-16 w-16 rounded-xl object-contain"
                                />
                            )
                        )}
                        {onTitle && title && (
                            <h3 className={`text-base font-semibold ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>{title}</h3>
                        )}
                        {onSubtitle && subtitle && (
                            <p className={`text-sm ${isDarkMode ? "text-[#8FA3C9]" : "text-gray-600"}`}>{subtitle}</p>
                        )}
                        {onDescription && data.description && (
                            <p className={`text-sm ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>{data.description}</p>
                        )}
                    </>
                )}
            </div>

            {/* Footer: always bottom-pinned, left-aligned (not centered) */}
            {hasFooter && !isEditing && (
                <div className={`mt-4 flex flex-col gap-1 border-t pt-3 ${isDarkMode ? "border-[#1A1F2B]" : "border-gray-200"}`}>
                    {hasDateRow && (data.startDate || data.endDate) && (
                        <span className={`font-mono text-[10.5px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                            {onStartDate && formatDate(data.startDate, dateFormat)}
                            {onStartDate && onEndDate && data.startDate && data.endDate ? " — " : ""}
                            {onEndDate && formatDate(data.endDate, dateFormat)}
                        </span>
                    )}
                    {hasStampRow && (data.createdAt || data.updatedAt) && (
                        <span className={`font-mono text-[10.5px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                            {onCreatedAt && data.createdAt ? `Created ${formatDate(data.createdAt, "day")}` : ""}
                            {onCreatedAt && onUpdatedAt && data.createdAt && data.updatedAt ? " · " : ""}
                            {onUpdatedAt && data.updatedAt ? `Updated ${formatDate(data.updatedAt, "day")}` : ""}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}