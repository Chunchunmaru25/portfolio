import { useEffect, useState } from "react";
import { getExperience } from "../../services/experience";
import type { Experience } from "../../path/interfaces/experienceInterface";
import { getErrorMessage } from "../../path/interfaces/dataTypes";

export default function useExperience(enabled = true) {
    const [experience, setExperience] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getExperience();
                setExperience(result.data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { experience, loading, error };
}