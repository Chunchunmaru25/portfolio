import { useState, useEffect } from "react";
import { Plus, X, Trash2, Pencil, Check, Loader2 } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { addPersonalApi, deletePersonalApi, getPrivatePersonal, updatePersonalApi } from "../../components/services/personal";
import { useNavigate } from "react-router";
import { WebRoute } from "../../routes/web.route";
// ======================
// Dummy data
// ======================
// const DUMMY_DATA: KeyValueRecord[] = [
//     {
//         id: "1",
//         key: "SITE_TITLE",
//         value: "Kei's Portfolio",
//         createdAt: "2026-05-01T09:15:00Z",
//         updatedAt: "2026-05-01T09:15:00Z",
//     },
//     {
//         id: "2",
//         key: "CONTACT_EMAIL",
//         value: "hello@example.com",
//         createdAt: "2026-05-02T11:40:00Z",
//         updatedAt: "2026-06-10T14:22:00Z",
//     },
//     {
//         id: "3",
//         key: "MAINTENANCE_MODE",
//         value: "false",
//         createdAt: "2026-05-05T08:00:00Z",
//         updatedAt: "2026-05-05T08:00:00Z",
//     },
//     {
//         id: "4",
//         key: "MAX_UPLOAD_SIZE_MB",
//         value: "10",
//         createdAt: "2026-06-01T16:30:00Z",
//         updatedAt: "2026-06-20T10:05:00Z",
//     },
// ];
export interface KeyValueRecord {
    id: string;
    key: string;
    value: string;
    createdAt: string;
    updatedAt: string;
}

const formatDate = (iso: string) =>
    new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

// const genId = () => Math.random().toString(36).slice(2, 9);

export default function IndexPersonal() {
    const isDarkMode = useTheme();

    const [entries, setEntries] = useState<KeyValueRecord[]>([]);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [draftKey, setDraftKey] = useState("");
    const [draftValue, setDraftValue] = useState("");

    const [isAdding, setIsAdding] = useState(false);
    const [newKey, setNewKey] = useState("");
    const [newValue, setNewValue] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // ======================
    // GET PERSONALS
    // ======================
    useEffect(() => {
        (async () => {
            try {
                const response = await getPrivatePersonal();

                if (response.status === "success") {
                    setEntries(response.data ?? []);
                } else {
                    toast.error(response.message);
                }
            } catch (error) {
                navigate(WebRoute.LOGIN);
                toast.error(error.response.data.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // ======================
    // Add
    // ======================
    const handleStartAdd = () => {
        setIsAdding(true);
        setNewKey("");
        setNewValue("");
    };

    const handleConfirmAdd = async () => {
        if (!newKey.trim()) {
            toast.error("Key is required");
            return;
        }
        const response = await addPersonalApi(newKey.trim(), newValue);
        if (response.status === "error") {
            toast.success(response.message);
        }
        // const now = new Date().toISOString();
        // const record: KeyValueRecord = {
        //     id: genId(),
        //     key: newKey.trim(),
        //     value: newValue,
        //     createdAt: now,
        //     updatedAt: now,
        // };
        setEntries((prev) => [response.data, ...prev]);
        toast.success(response.message);
        setIsAdding(false);
    };

    // ======================
    // Update
    // ======================
    const handleStartEdit = (row: KeyValueRecord) => {
        setEditingId(row.id);
        setDraftKey(row.key);
        setDraftValue(row.value);
    };

    const handleConfirmEdit = async (id: string) => {
        if (!draftKey.trim()) {
            toast.error("Key is required");
            return;
        }

        const response = await updatePersonalApi(id, draftKey, draftValue);
        if (response.status === "error") {
            toast.success(response.message);
        }
        toast.success(response.message);
        setEntries((prev) =>
            prev.map((row) =>
                row.id === id
                    ? { ...row, key: draftKey.trim(), value: draftValue }
                    : row
            )
        );
        setEditingId(null);
    };

    // ======================
    // Delete
    // ======================
    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this entry?")) return;
        const response = await deletePersonalApi(id);
        if (response.status === "error") {
            toast.success(response.message);
        }
        toast.success(response.message);
        setEntries((prev) => prev.filter((row) => row.id !== id));
    };

    return (
        <div className={`min-h-full w-full ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"}`}>
            <div className="w-full p-3 sm:p-4 md:p-8">
                {/* Header */}
                <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
                    <div>
                        <h1 className={`mb-1.5 text-2xl sm:text-3xl font-semibold tracking-tight ${isDarkMode ? "text-[#E6E9EF]" : "text-black"}`}>
                            PERSONALS
                        </h1>
                        {/* <p className={`text-sm ${isDarkMode ? "text-[#6B7280]" : "text-gray-500"}`}>
                            Data as returned by the server.
                        </p> */}
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`font-mono text-[11px] ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                            {entries.length} personal{entries.length === 1 ? "" : "s"}
                        </span>
                        <button
                            type="button"
                            onClick={handleStartAdd}
                            className="flex items-center gap-1.5 rounded-lg bg-[#5B8DEF] px-3.5 py-2 text-xs font-medium text-white transition hover:bg-[#79A2F5]"
                        >
                            <Plus size={13} /> Add entry
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className={`overflow-x-auto rounded-2xl border ${isDarkMode ? "border-[#1A1F2B] bg-[#0D1017]" : "border-gray-200 bg-white"}`}>
                    <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                        <thead>
                            <tr className={`font-mono text-[10.5px] uppercase tracking-wide ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                <th className="px-4 py-3 font-medium sm:px-5">ID</th>
                                <th className="px-4 py-3 font-medium sm:px-5">Key</th>
                                <th className="px-4 py-3 font-medium sm:px-5">Value</th>
                                <th className="px-4 py-3 font-medium sm:px-5">Created</th>
                                <th className="px-4 py-3 font-medium sm:px-5">Updated</th>
                                <th className="px-4 py-3 font-medium sm:px-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* New row */}
                            {isAdding && (
                                <tr className={`border-t ${isDarkMode ? "border-[#1A1F2B]" : "border-gray-100"}`}>
                                    <td className={`px-4 py-3 font-mono text-[11px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                        —
                                    </td>
                                    <td className="px-4 py-2.5 sm:px-5">
                                        <input
                                            autoFocus
                                            value={newKey}
                                            onChange={(e) => setNewKey(e.target.value)}
                                            placeholder="key"
                                            className={`w-full rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                        />
                                    </td>
                                    <td className="px-4 py-2.5 sm:px-5">
                                        <input
                                            value={newValue}
                                            onChange={(e) => setNewValue(e.target.value)}
                                            placeholder="value"
                                            className={`w-full rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                        />
                                    </td>
                                    <td className={`px-4 py-3 font-mono text-[10.5px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>—</td>
                                    <td className={`px-4 py-3 font-mono text-[10.5px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>—</td>
                                    <td className="px-4 py-2.5 sm:px-5">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <button
                                                type="button"
                                                onClick={handleConfirmAdd}
                                                title="Save"
                                                className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                                            >
                                                <Check size={15} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsAdding(false)}
                                                title="Cancel"
                                                className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-400 hover:bg-gray-100"}`}
                                            >
                                                <X size={15} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}

                            {/* Existing rows */}
                            {entries.map((row) => {
                                const isEditing = editingId === row.id;
                                return (
                                    <tr
                                        key={row.id}
                                        className={`border-t transition ${isDarkMode ? "border-[#1A1F2B] hover:bg-[#10141D]" : "border-gray-100 hover:bg-gray-50"}`}
                                    >
                                        <td className={`px-4 py-3 font-mono text-[11px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                            {row.id}
                                        </td>

                                        <td className="px-4 py-2.5 sm:px-5">
                                            {isEditing ? (
                                                <input
                                                    autoFocus
                                                    value={draftKey}
                                                    onChange={(e) => setDraftKey(e.target.value)}
                                                    className={`w-full rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                                />
                                            ) : (
                                                <span className={`font-mono text-[12.5px] ${isDarkMode ? "text-[#9CB8F0]" : "text-blue-600"}`}>
                                                    {row.key}
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-4 py-2.5 sm:px-5">
                                            {isEditing ? (
                                                <input
                                                    value={draftValue}
                                                    onChange={(e) => setDraftValue(e.target.value)}
                                                    className={`w-full rounded-md border bg-transparent px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-[#5B8DEF] ${isDarkMode ? "border-[#232838] text-[#E6E9EF]" : "border-gray-200 text-black"}`}
                                                />
                                            ) : (
                                                <span className={`break-all ${isDarkMode ? "text-[#C4C9D4]" : "text-gray-700"}`}>
                                                    {row.value}
                                                </span>
                                            )}
                                        </td>

                                        <td className={`px-4 py-3 font-mono text-[10.5px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                            {formatDate(row.createdAt)}
                                        </td>
                                        <td className={`px-4 py-3 font-mono text-[10.5px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                            {formatDate(row.updatedAt)}
                                        </td>

                                        <td className="px-4 py-2.5 sm:px-5">
                                            <div className="flex items-center justify-end gap-1.5">
                                                {isEditing ? (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleConfirmEdit(row.id)}
                                                            title="Save"
                                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#5B8DEF] hover:bg-[#1A1F2B]" : "text-blue-600 hover:bg-gray-100"}`}
                                                        >
                                                            <Check size={15} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEditingId(null)}
                                                            title="Cancel"
                                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B]" : "text-gray-400 hover:bg-gray-100"}`}
                                                        >
                                                            <X size={15} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleStartEdit(row)}
                                                            title="Update entry"
                                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-[#5B8DEF]" : "text-gray-400 hover:bg-gray-100 hover:text-blue-500"}`}
                                                        >
                                                            <Pencil size={14} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDelete(row.id)}
                                                            title="Delete entry"
                                                            className={`rounded-lg p-1.5 transition ${isDarkMode ? "text-[#4B5468] hover:bg-[#1A1F2B] hover:text-red-400" : "text-gray-400 hover:bg-gray-100 hover:text-red-500"}`}
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                            {/* Empty state */}
                            {/* {!isAdding && entries.length === 0 && (
                                <tr>
                                    <td colSpan={6} className={`px-4 py-8 text-center font-mono text-[12px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                        No entries found.
                                    </td>
                                </tr>
                            )} */}

                            {loading ?
                                (
                                    <>
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className={`px-4 py-8 font-mono text-[12px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"
                                                    }`}
                                            >
                                                <div className="flex justify-center">
                                                    <Loader2 className="animate-spin" />
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                ) :
                                (
                                    <>
                                        {!isAdding && entries.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className={`px-4 py-8 text-center font-mono text-[12px] sm:px-5 ${isDarkMode ? "text-[#4B5468]" : "text-gray-400"}`}>
                                                    No entries found.
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}