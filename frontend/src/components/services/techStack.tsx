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

export async function getTechStack() {
    const {
        data
    } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack`);

    return data;
}
export async function addTechStack(stack: string, color: string, imgUrl: string, types: string[]) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack`, { stack, color, imgUrl, types }, { withCredentials: true });

    return data;
}

export async function updateTechStack(id: string, fields: Partial<Records>) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/${id}`, fields, { withCredentials: true });

    return data;
}

export async function deleteTechStack(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/${id}`, { withCredentials: true });
    return data;
}

// types
export async function getTypeTechStack() {
    const {
        data
    } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/type`);

    return data;
}

export async function addTypeTechStack(techStackId: string, type: string) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/type`, { techStackId, type }, { withCredentials: true });

    return data;
}

export async function updateTypeTechStack(id: string, type: string) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/type/${id}`, { type }, { withCredentials: true });

    return data;
}

export async function deleteTypeTechStack(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/tech-stack/type/${id}`, { withCredentials: true });

    return data;
}
