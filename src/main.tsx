import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SeoHead } from "./features/portfolio/SeoHead.tsx";
import { LangProvider } from "@/hooks/useLang";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <SeoHead />
      <App />
    </LangProvider>
  </StrictMode>
);
