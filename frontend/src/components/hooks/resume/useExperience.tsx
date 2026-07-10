import { useEffect, useState } from "react";
import { getExperience } from "../../services/experience";

export default function useExperience(enabled = true) {
    const [experience, setExperience] = useState([]);
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
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { experience, loading, error };
}