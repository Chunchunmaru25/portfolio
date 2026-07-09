import { useEffect, useState } from "react";
import { getPersonal } from "../services/personal";

export default function usePersonal(enabled = true) {
    const [data, setAboutMe] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getPersonal();
                setAboutMe(result.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { data, loading, error };
}