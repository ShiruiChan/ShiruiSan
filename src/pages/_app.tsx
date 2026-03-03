import type { AppProps } from "next/app";
import { LangProvider } from "@/hooks/useLang";
import { ThemeProvider } from "@/hooks/useTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LangProvider initialLang="ru">
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  );
}