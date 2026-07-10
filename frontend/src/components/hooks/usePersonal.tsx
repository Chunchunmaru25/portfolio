import { useEffect, useState } from "react";
import { getPersonal } from "../services/personal";
import { getErrorMessage } from "../path/interfaces/dataTypes";

interface PersonalItem {
    key: string;
    value: string | number;
}
export default function usePersonal(enabled = true) {
    const [data, setAboutMe] = useState<PersonalItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getPersonal();
                setAboutMe(result.data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { data, loading, error };
}