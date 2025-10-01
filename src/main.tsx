import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SeoHead } from "./features/portfolio/SeoHead.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoHead />
    <App />
  </StrictMode>
);
