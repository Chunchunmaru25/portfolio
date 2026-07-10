import { useEffect, useState } from "react";
import { getAchievements } from "../../services/achievements";

export default function useAchievements(enabled = true) {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getAchievements();
                setAchievements(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { achievements, loading, error };
}