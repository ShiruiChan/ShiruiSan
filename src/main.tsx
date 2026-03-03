import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SeoHead } from "./features/portfolio/SeoHead";
import { LangProvider } from "@/hooks/useLang";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <LangProvider>
        <SeoHead />
        <App />
      </LangProvider>
    </Theme>
  </StrictMode>
);
