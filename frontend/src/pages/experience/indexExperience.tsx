import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { WebRoute } from "../../routes/web.route";
import { addExperienceDescription, deleteExperience, deleteExperienceDescription, getExperience, updateExperience, updateExperienceDescription } from "../../components/services/experience";
import ExperienceCard from "./ExperienceCard";
import type { Experience, ExperienceCardProps } from "../../components/path/interfaces/experienceInterface";


export default function IndexExperience({ dateFormat, title }: ExperienceCardProps) {
    const isDarkMode = useTheme();
    const navigate = useNavigate();
    const [records, setRecords] = useState<Experience[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getExperience();
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
    // ADD NAVIGATION
    // ======================
    const handleAddRecord = () => {
        navigate(WebRoute.ADD_EXPERIENCE);
    };

    // ======================
    // HEADER UPDATE
    // ======================
    const handleUpdateHeader = async (
        id: string,
        fields: { company: string; branch: string; position: string; startDate: string; endDate: string }
    ) => {
        const response = await updateExperience(id, fields);
        if (response.status === "error") {
            toast.error(response.message);
        }
        setRecords((prev) =>
            prev.map((r) => (r.id === id ? { ...r, ...fields, updatedAt: new Date().toISOString() } : r))
        );
        toast.success(response.message);
    };

    // ======================
    // DELETE RECORD
    // ======================
    const handleDeleteRecord = async (id: string) => {
        if (!window.confirm(`Delete this ${title}`)) return;
        const response = await deleteExperience(id);
        if (response.status === "error") {
            toast.error(response.messageS);
        }
        setRecords((prev) => prev.filter((r) => r.id !== id));
        toast.success(response.message);
    };

    // ======================
    // Descriptions
    // ======================
    const handleAddDescription = async (
        experienceId: string,
        description: string
    ) => {
        const response = await addExperienceDescription(experienceId, description);

        if (response.status === "error") {
            toast.error(response.message);
            return;
        }

        setRecords((prev) =>
            prev.map((record) =>
                record.id === experienceId
                    ? {
                        ...record,
                        experienceDescriptions: [
                            ...record.experienceDescriptions,
                            response.data,
                        ],
                    }
                    : record
            )
        );

        toast.success(response.message);
    };

    const handleUpdateDescription = async (
        experienceId: string,
        descriptionId: string,
        description: string
    ) => {
        const response = await updateExperienceDescription(descriptionId, description);

        if (response.status === "error") {
            toast.error(response.message);
            return;
        }

        setRecords((prev) =>
            prev.map((record) =>
                record.id === experienceId
                    ? {
                        ...record,
                        experienceDescriptions: record.experienceDescriptions.map((desc) =>
                            desc.id === descriptionId ? response.data : desc
                        ),
                    }
                    : record
            )
        );

        toast.success(response.message);
    };

    const handleDeleteDescription = async (
        experienceId: string,
        descriptionId: string
    ) => {
        if (!window.confirm(`Delete this ${title}`)) return;

        const response = await deleteExperienceDescription(descriptionId);

        if (response.status === "error") {
            toast.error(response.message);
            return;
        }

        setRecords((prev) =>
            prev.map((record) =>
                record.id === experienceId
                    ? {
                        ...record,
                        experienceDescriptions: record.experienceDescriptions.filter(
                            (desc) => desc.id !== descriptionId
                        ),
                    }
                    : record
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
                        <ExperienceCard
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
                            No {title} entries found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
