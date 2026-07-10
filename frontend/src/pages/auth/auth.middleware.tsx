import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import ValidateJwt from "../../components/services/auth/ValidateJwt";
import { WebRoute } from "../../routes/web.route";
export default function AuthMiddleware() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await ValidateJwt();
                if (response) {
                    setAuthenticated(true);
                }
            } catch {
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkToken();
    }, []);

    if (loading) {
        return <div>Checking authentication...</div>;
    }

    if (!authenticated) {
        return <Navigate to={WebRoute.LOGIN} replace />;
    }

    return <Outlet />;
}