import { useEffect, useState } from "react";
import { getTechStack } from "../services/techStack";

export default function useTechStack(enabled = true) {
    const [techStack, setTechStack] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getTechStack();
                setTechStack(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { techStack, loading, error };
}