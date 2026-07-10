import { useEffect, useState } from "react";
import { getEducation } from "../../services/education";

export default function useEducation(enabled = true) {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getEducation();
                setEducation(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { education, loading, error };
}