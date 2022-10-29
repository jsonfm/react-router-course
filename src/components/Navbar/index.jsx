import { NavLink } from "react-router-dom";
import { useAuth } from "@/auth";

import "./styles.css";


const routes = [
    {
        to: "/",
        text: "Home",
        private: false,
    },
    {
        to: "/blog",
        text: "Blog",
        private: false,
    },
    {
        to: "/profile",
        text: "Profile",
        private: true,
    },   
    {
        to: "/login",
        text: "Login",
        private: false,
        publicOnly: true,
    },  
    {
        to: "/logout",
        text: "Logout",
        private: true,
    },  
]


export const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="container">
            <ul>
                {routes.map(route => {
                    if(route.private && !auth.user) return null;
                    if(auth.user && route.publicOnly) return null
                    return(
                        <li key={route.text}>
                            <NavLink
                                to={route.to}
                                className={({ isActive }) => isActive ? "nav-is-active" : "nav-is-disabled"}
                                end
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}