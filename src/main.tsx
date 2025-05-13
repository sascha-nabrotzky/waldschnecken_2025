import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./main.css";
import Index from "./pages/Index.tsx";
import Concept from "./pages/concept.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/concept"} element={<Concept />} />
        </Routes>
    </BrowserRouter>,
);
