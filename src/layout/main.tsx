import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MobileNavbar from "../components/MobileNavbar"

export default function Layout() {
    return (
        <>
         <Navbar/>
         <MobileNavbar/>
         <main className="pb-12">
            <Outlet/>
         </main>
        </>
    )
}