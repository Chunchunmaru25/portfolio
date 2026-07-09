import { useEffect, useState } from "react";
import { getBackendSkills } from "../services/backendSkills";

export default function useBackendSkills(enabled = true) {
    const [backend, setbackend] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!enabled) return;
        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getBackendSkills();
                setbackend(result.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { backend, loading, error };
}