import { useEffect, useState } from "react";
import { getFrontendSkills } from "../services/frontendSkills";
import type { SkillRecord } from "../path/interfaces/dataTypes";
import { getErrorMessage } from "../path/interfaces/dataTypes";

export default function useFrontendSkills(enabled = true) {
    const [frontend, setFrontend] = useState<SkillRecord[]>([]);
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
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { frontend, loading, error };
}