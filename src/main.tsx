import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="ITS_Global_JP">
            <MantineProvider>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
);
