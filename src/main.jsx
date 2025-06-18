import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Route";
import { Toaster } from "sonner";

// Disable React DevTools
if (import.meta.env.PROD) {
    // Hide React from global scope
    Object.defineProperty(window, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
        get: () => undefined,
        set: () => {},
    });

    // Remove React from window object
    delete window.React;
    delete window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
        <Toaster position="top-center" closeButton richColors />
    </StrictMode>
);

// heblakanto vebla rani dash || LOS
