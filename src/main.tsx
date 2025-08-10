// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import App from "./App.tsx";

const jpStack =
    '"Noto Sans JP", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Hiragino Sans", "Meiryo", sans-serif';

const headingStack = '"Poppins", ' + jpStack;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/ITS_Global_JP/">
            <MantineProvider
                withCssVariables
                theme={{
                    fontFamily: jpStack,
                    headings: {
                        fontFamily: headingStack,
                        fontWeight: "700",
                    },
                }}
            >
                <App />
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
);
