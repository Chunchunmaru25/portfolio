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

export async function getFrontendSkills() {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/frontend-skills`);
    return data;
}

export async function deleteFrontendSkills(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/frontend-skills/${id}`, { withCredentials: true });
    return data;
}

export async function createFrontendSkills(fields: Partial<Records>) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/frontend-skills/`, fields, { withCredentials: true });
    return data;
}

export async function updateFrontendSkills(id: string, fields: Partial<Records>) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/frontend-skills/${id}`, fields, { withCredentials: true });
    return data;
}