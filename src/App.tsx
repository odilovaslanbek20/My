import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ProjectsPage from "./pages/Projects/Project";
import ContactPage from "./pages/Contacts/Contact";
import Layout from "./layout/main";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}