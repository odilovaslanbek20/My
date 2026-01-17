import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MobileNavbar from "../components/MobileNavbar"
import Footer from "../components/Footer"

export default function Layout() {
    return (
        <>
         <Navbar/>
         <MobileNavbar/>
         <main className="pb-20">
            <Outlet/>
         </main>
         <Footer/>
        </>
    )
}