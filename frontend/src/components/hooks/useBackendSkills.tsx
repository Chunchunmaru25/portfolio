import { useEffect, useState } from "react";
import { getBackendSkills } from "../services/backendSkills";
import type { SkillRecord } from "../path/interfaces/dataTypes";
import { getErrorMessage } from "../path/interfaces/dataTypes";

export default function useBackendSkills(enabled = true) {
    const [backend, setbackend] = useState<SkillRecord[]>([]);
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
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { backend, loading, error };
}