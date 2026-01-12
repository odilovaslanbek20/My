import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Layout() {
    return (
        <>
         <Navbar/>
         <main className="web-container pt-24">
            <Outlet/>
         </main>
        </>
    )
}