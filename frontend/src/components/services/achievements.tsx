import axios from "axios";

export interface Records {
    id: string;
    title?: string;
    subtitle?: string;
    description?: string | null;
    imgUrl?: string;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    [key: string]: unknown;
}

export async function getAchievements() {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/achievements`);
    return data;
}

export async function deleteAchievements(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/achievements/${id}`, { withCredentials: true });
    return data;
}

export async function createAchievements(fields: Partial<Records>) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/achievements/`, fields, { withCredentials: true });
    return data;
}

export async function updateAchievements(id: string, fields: Partial<Records>) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/achievements/${id}`, fields, { withCredentials: true });
    return data;
}