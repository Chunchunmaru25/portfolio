import { useEffect, useState } from "react";
import { getTechStack } from "../services/techStack";
import { getErrorMessage } from "../path/interfaces/dataTypes";

interface TechStackItem {
    id: string;
    stack: string;
    color?: string;
    imgUrl?: string;
    [key: string]: unknown;
}

export default function useTechStack(enabled = true) {
    const [techStack, setTechStack] = useState<TechStackItem[]>([]);
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
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { techStack, loading, error };
}