import axios from "axios";
const RegisterServices = async (email: string, password: string, confirmPassword: string, adminCode: string) => {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/register`, {
        email,
        password,
        confirmPassword,
        adminCode,
    },
        {
            withCredentials: true,
        }
    );
    return data;
}
export default RegisterServices;