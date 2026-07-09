import axios from "axios";

// ======================
// PROJECT
// ======================
export const getProjects = async function () {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/projects`);
    return data;
}
export const getPrivateProjects = async () => {
    const { data } = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/private`,
        {
            withCredentials: true,
        }
    );

    return data;
};
export const getSingleProject = async (projectId: string) => {
    const { data } = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/private/${projectId}`,
        {
            withCredentials: true,
        }
    );

    return data;
};

export async function addProjects(formData: FormData) {
    const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects`,
        formData
    );
    return data;
}

export async function deleteProjectApi(projectId: string) {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/${projectId}`
    );

    return data;
}

export async function updateProjectApi(
    projectId: string,
    formData: { title: string; description: string }
) {
    const { data } = await axios.patch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/${projectId}`,
        formData,
        {
            withCredentials: true,
        }
    );

    return data;
}




// ======================
// TYPE
// ======================
export async function addTypeApi(
    projectId: string,
    types: string[]
) {
    const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/add-type`,
        {
            projectId,
            types,
        }
    );

    return data;
}

export async function deleteTypeApi(projectId: string) {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/delete-type/${projectId}`
    );

    return data;
}



// ======================
// STACK
// ======================
export async function addStackApi(
    projectId: string,
    names: string[]
) {
    const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/add-stack`,
        {
            projectId,
            names,
        }
    );

    return data;
}

export async function deleteStackApi(projectId: string) {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/delete-stack/${projectId}`
    );

    return data;
}

// ======================
// SOURCE
// ======================
export async function addSourceApi(projectId: string, formData: FormData) {
    formData.append("projectId", projectId);

    const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/add-source`,
        formData
    );

    return data;
}

export async function deleteSourceApi(projectId: string) {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/delete-source/${projectId}`
    );

    return data;
}

export async function getSingleSourceApi(sourceId: string) {
    const { data } = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/${sourceId}`, {
        withCredentials: true
    }
    );

    return data;
}


export async function updateSingleSourceApi(
    sourceId: string,
    formData: { title: string; description: string }
) {
    const { data } = await axios.patch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/projects/update-source/${sourceId}`,
        formData,
        {
            withCredentials: true,
        }
    );
    return data;
}
