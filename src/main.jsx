import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Route";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
        <Toaster position="top-center" closeButton richColors />
    </StrictMode>
);

// heblakanto vebla rani dash || LOS
