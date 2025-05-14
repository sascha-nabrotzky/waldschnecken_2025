import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index.tsx";
import Concept from "./pages/Concept.tsx";
import Rooms from "./pages/rooms.tsx";
import Blog from "./pages/Blog.tsx";
import Imprint from "./pages/Imprint.tsx";
import PrivacyPolicy from "./pages/Privacypolicy.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/concept"} element={<Concept />} />
            <Route path={"/rooms"} element={<Rooms />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/imprint"} element={<Imprint />} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        </Routes>
    </BrowserRouter>,
);
