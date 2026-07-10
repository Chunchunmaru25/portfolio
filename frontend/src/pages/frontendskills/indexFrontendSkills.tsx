
import { useEffect, useState } from "react";
import useTheme from "../../components/hooks/useTheme";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
import { Card as FrontendCard } from "./FrontendCard";
import { createFrontendSkills, deleteFrontendSkills, getFrontendSkills, updateFrontendSkills } from "../../components/services/frontendSkills";
import axios from "axios";

export type AllowedDateFormat = "day" | "month";
export interface CardProps {
    dateFormat: AllowedDateFormat;
    title: string;
};
export interface Records {
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

export default function IndexFrontendSkills({ dateFormat, title }: CardProps) {
    const isDarkMode = useTheme();
    // const navigate = useNavigate();
    const [records, setRecords] = useState<Records[]>([]);
    const [showAddCard, setShowAddCard] = useState(false);

    // FETCH DATA
    useEffect(() => {
        (async () => {
            try {
                const response = await getFrontendSkills();

                if (response.status === "error") {
                    toast.error(response.message);
                    return;
                }

                const formattedData = (response.data ?? []).map((item) => ({
                    ...item,
                    title: item.stack,    // new property
                    subtitle: String(item.progress),     // overwrite imgUrl with svg
                }));

                setRecords(formattedData);
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

    // UPDATE DATE
    const handleUpdateRecord = async (id: string, fields: Partial<Records>) => {
        try {
            const response = await updateFrontendSkills(id, fields);
            toast.success(response.message);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Request failed");
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Unknown error");
            }
        }
    }
    // CREATE DATA
    const handleCreateRecord = async (fields: Partial<Records>) => {
        try {
            const response = await createFrontendSkills(fields);
            toast.success(response.message);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Request failed");
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Unknown error");
            }
        }
    }
    // DELETE DATE
    const handleDeleteRecord = async (id: string) => {
        try {
            const response = await deleteFrontendSkills(id);
            toast.success(response.message);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? "Request failed");
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Unknown error");
            }
        }
    }
    return (
        <>
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
                                onClick={() => setShowAddCard(true)}
                                className="flex items-center gap-1.5 rounded-lg bg-[#5B8DEF] px-3.5 py-2 text-xs font-medium text-white transition hover:bg-[#79A2F5]"
                            >
                                <Plus size={13} /> Add {title}
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex w-full flex-col gap-4">
                        <FrontendCard
                            dateFormat={dateFormat}
                            data={records}
                            onTitle
                            onSubtitle
                            onDescription
                            // onImg
                            // onStartDate
                            // onEndDate
                            onCreatedAt
                            onUpdatedAt
                            onUpdateRecord={(id, fields) => handleUpdateRecord(id, fields)}
                            onDeleteRecord={(id) => handleDeleteRecord(id)}
                            onCreateRecord={(fields) => handleCreateRecord(fields)}
                            showAddCard={showAddCard}
                        />

                        {records.length === 0 && (
                            <div className={`rounded-2xl border p-8 text-center font-mono text-[12px] ${isDarkMode ? "border-[#1A1F2B] text-[#4B5468]" : "border-gray-200 text-gray-400"}`}>
                                No {title} entries found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}