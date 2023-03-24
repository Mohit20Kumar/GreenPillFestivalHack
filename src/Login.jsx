import { Auth, useAuth } from "@arcana/auth-react";
import { Navigate } from "react-router-dom";


const Login = () => {
    const onLogin = () => {
        // Route to authenticated page
        <Navigate to="/dashboard" />
    }
    const auth = useAuth();
    return (
        <div>
            {auth.loading ? (
                "Loading"
            ) : auth.isLoggedIn ? (
                <Navigate to="/dashboard" />
            ) : (
                <div>
                    <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
                </div>
            )}
        </div>
    );
}

export default Login;