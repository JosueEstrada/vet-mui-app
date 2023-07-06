import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </DevSupport>
  </React.StrictMode>,
);
