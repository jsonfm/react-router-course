import { useAuth } from "@/auth";


export const Profile = () => {
    const auth = useAuth();

    return(
        <div>
           <h3>Perfil</h3>
           <p>Welcome, {auth.user.username}</p>
        </div>
    )
}