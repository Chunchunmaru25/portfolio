import { useEffect, useState } from "react";
import { getFrontendSkills } from "../services/frontendSkills";

export default function useFrontendSkills(enabled = true) {
    const [frontend, setFrontend] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getFrontendSkills();
                setFrontend(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { frontend, loading, error };
}