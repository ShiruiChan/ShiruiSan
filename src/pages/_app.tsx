import type { AppProps } from "next/app";
import * as React from "react";
import { LangProvider } from "@/hooks/useLang";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
