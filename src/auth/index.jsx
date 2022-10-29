import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

export const AuthContext = React.createContext();

const admins = [
    {
        username: "jason",
        role: "admin",
    },
    {
        username: "luis",
        role: "admin",
    },
    {
        username: "victor",
        role: "admin",
    },
]



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);



    const login = ({ username }) => {
        const user = admins.find(admin => admin.username === username) || { username };
        setUser(user);
        navigate("/profile");
    }

    const logout = () => {
        setUser(null);
        navigate("/");
    }

    const auth = { user, login, logout };

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const auth = React.useContext(AuthContext);
    return auth;
}

export const AuthRoute = ({ children }) => {
    const auth = useAuth();
    
    if(!auth.user){
        return <Navigate to="/login" />
    }

    return children;
}