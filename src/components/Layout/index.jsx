import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import "./styles.css";


export const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}