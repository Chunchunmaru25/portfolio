import axios from "axios";

export const getPersonal = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/personal`);
    return data;
};

export const getPrivatePersonal = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/personal/private`,
        {
            withCredentials: true,
        }
    );
    return data;
};

export const addPersonalApi = async (key: string, value: string) => {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/personal`,
        {
            key, value
        },
        {
            withCredentials: true,
        }
    );
    return data;
};

export const deletePersonalApi = async (id: string) => {
    const { data } = await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/personal/${id}`,
        {
            withCredentials: true,
        }
    );
    return data;
};

export const updatePersonalApi = async (id: string, key: string, value: string) => {
    const { data } = await axios.patch(`${import.meta.env.VITE_APP_BACKEND_URL}/personal/${id}`,
        {
            key, value
        },
        {
            withCredentials: true,
        }
    );
    return data;
};