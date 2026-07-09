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

export async function getBackendSkills() {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/backend-skills`);
    return data;
}

export async function deleteBackendSkills(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/backend-skills/${id}`, { withCredentials: true });
    return data;
}

export async function createBackendSkills(fields: Partial<Records>) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/backend-skills/`, fields, { withCredentials: true });
    return data;
}

export async function updateBackendSkills(id: string, fields: Partial<Records>) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/backend-skills/${id}`, fields, { withCredentials: true });
    return data;
}