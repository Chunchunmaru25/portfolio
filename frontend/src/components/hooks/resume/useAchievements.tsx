import { useEffect, useState } from "react";
import { getAchievements } from "../../services/achievements";
import type { AchievementRecord } from "../../path/interfaces/dataTypes";
import { getErrorMessage } from "../../path/interfaces/dataTypes";

export default function useAchievements(enabled = true) {
    const [achievements, setAchievements] = useState<AchievementRecord[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getAchievements();
                setAchievements(result.data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { achievements, loading, error };
}