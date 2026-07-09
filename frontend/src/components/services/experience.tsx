import axios from "axios";
import type { AddExperiencePayload } from "../path/interfaces/experienceInterface";

export async function getExperience() {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/experience`);
    return data;
}

export async function addExperience(payload: AddExperiencePayload) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/experience`,
        payload
    );
    return data;
}

export async function updateExperience(id: string, fields: { company: string; branch: string; position: string; startDate: string; endDate: string }) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/experience/${id}`,
        fields
        , {
            withCredentials: true
        });
    return data;
}

export async function deleteExperience(id: string,) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/experience/${id}`
        , {
            withCredentials: true
        });
    return data;
}

// description
export async function addExperienceDescription(id: string, description: string) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/experience/description/${id}`,
        { description },
        {
            withCredentials: true
        }
    );
    return data;
}

export async function deleteExperienceDescription(id: string,) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/experience/description/${id}`
        , {
            withCredentials: true
        });
    return data;
}

export async function updateExperienceDescription(id: string, description: string) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/experience/description/${id}`
        , { description },
        {
            withCredentials: true
        });
    return data;
}