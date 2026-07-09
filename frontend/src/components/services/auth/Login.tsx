import axios from "axios";
const LoginServices = async (email: string, password: string) => {
    const { data } = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/login`, {
        email,
        password,
    },
        {
            withCredentials: true,
        }
    );
    return data;
}
export default LoginServices;