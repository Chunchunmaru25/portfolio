import axios from "axios";
const ValidateJwt = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/validate-token`,
        {
            withCredentials: true,
        }
    );
    return data;
}
export default ValidateJwt;