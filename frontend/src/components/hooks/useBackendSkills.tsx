import { useEffect, useState } from "react";
import { getBackendSkills } from "../services/backendSkills";

export default function useBackendSkills(enabled = true) {
    const [backend, setbackend] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;
        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getBackendSkills();
                setbackend(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { backend, loading, error };
}