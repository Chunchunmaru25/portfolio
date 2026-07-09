import { useEffect, useState } from "react";
import { getSoftSkills } from "../services/softSkills";

export default function useSoftSkills(enabled = true) {
    const [SoftSkills, setSoftSkills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!enabled) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await getSoftSkills();
                setSoftSkills(result.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [enabled]);

    return { SoftSkills, loading, error };
}