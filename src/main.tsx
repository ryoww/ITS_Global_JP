import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <MantineProvider>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
);
