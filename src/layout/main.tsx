import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MobileNavbar from "../components/MobileNavbar"

export default function Layout() {
    return (
        <>
         <Navbar/>
         <MobileNavbar/>
         <main className="web-container pt-20">
            <Outlet/>
         </main>
        </>
    )
}