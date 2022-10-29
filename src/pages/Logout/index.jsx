import { useAuth } from "@/auth";


export const Logout = () => {
    const auth = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return(
        <div>
            <h3>Logout</h3>
            <form onSubmit={onSubmit}>
                <label>¿Seguro/a que quieres salir?</label>
                <button type="submit">Salir</button>
            </form>
        </div>
    )
}