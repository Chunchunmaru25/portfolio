import { useEffect, useState } from "react";
import { getEducation } from "../../services/education";
import type { EducationRecord } from "../../path/interfaces/dataTypes";
import { getErrorMessage } from "../../path/interfaces/dataTypes";

export default function useEducation(enabled = true) {
    const [education, setEducation] = useState<EducationRecord[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getEducation();
                setEducation(result.data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { education, loading, error };
}