import { useEffect, useState } from "react";
import { getTechStack } from "../services/techStack";
import { getErrorMessage } from "../path/interfaces/dataTypes";

interface TechStackApiItem {
    id: string;
    stack: string;
    bgColor: string;
    imgUrl: string;
    createdAt: string;
    updatedAt: string;
    techstacktype: TechStackTypeApiItem[];
}
interface TechStackTypeApiItem {
    id: string;
    type: ProjectType;
    createdAt: string;
    updatedAt: string;
    techStackId: string;
}
type ProjectType =
    | "frontend"
    | "backend"
    | "databaseandserver"
    | "developmenttools"
    | "templateanddesign";


export default function useTechStack(enabled = true) {
    const [techStack, setTechStack] = useState<TechStackApiItem[]>([]);
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