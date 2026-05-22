import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";
import { SiteFooter } from "./components/SiteFooter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteHeader />
    <App />
    <SiteFooter />
  </StrictMode>,
);
