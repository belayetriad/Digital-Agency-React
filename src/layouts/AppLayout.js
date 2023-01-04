import { Outlet } from "react-router-dom";
import BackToTop from "../components/shared/backToTop/BackToTop";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import NavBar from "../components/shared/navBar/NavBar";

export default function AppLayout({children}){
    return (
        <>
            {/* Navbar Start */}
            <NavBar />
        
            {/* Header Start */}
            <Header />

            {/* Child Component Here */}
            <Outlet></Outlet>
                
            {/* Footer Start */}
            <Footer />
        
            {/* Back to Top */}
            <BackToTop />
        </> 
    )
}