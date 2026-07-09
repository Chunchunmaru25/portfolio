import axios from "axios";

export interface AddEducationPayload {
    program: string;
    branch: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export async function getEducation() {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/education`);
    return data;
}

export async function addEducation(payload: AddEducationPayload) {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/education`,
        payload, {
        withCredentials: true,
    })
    return data;
}

export async function deleteEducation(id: string) {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/education/${id}`, {
        withCredentials: true,
    })
    return data;
}

export async function updateEducation(id: string, fields: { program: string; branch: string; startDate: string; endDate: string }) {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/education/${id}`,
        fields,
        {
            withCredentials: true
        }
    )
    console.log(data);
    return data;
}


// description
export async function addEducationDescription(id: string, description: string) {

    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/education/description/${id}`,
        { description },
        {
            withCredentials: true
        }
    )
    return data;
}

export async function updateEducationDescription(id: string, description: string) {

    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/education/description/${id}`,
        { description },
        {
            withCredentials: true
        }
    )
    return data;
}

export async function deleteEducationDescription(id: string) {

    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/education/description/${id}`,
        {
            withCredentials: true
        }
    )
    return data;
}

