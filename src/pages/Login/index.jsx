import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/auth";


export const Login = () => {
    const auth = useAuth();
    const [username, setUsername] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        auth.login({ username });
    }

    if(auth.user){
        return <Navigate to="/profile"/>
    }

    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nombre de usuario</label>
                <input 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}