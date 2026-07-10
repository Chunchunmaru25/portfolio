import { useEffect, useState } from "react";
import { getProjects } from "../services/projects";

export default function useProjects(enabled = true) {
    const [Projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getProjects();
                setProjects(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { Projects, loading, error };
}