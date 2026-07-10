import { useEffect, useState } from "react";
import { getProjects } from "../services/projects";
import type { ProjectRecord } from "../path/interface";
import { getErrorMessage } from "../path/interfaces/dataTypes";

export default function useProjects(enabled = true) {
    const [Projects, setProjects] = useState<ProjectRecord[]>([]);
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
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { Projects, loading, error };
}