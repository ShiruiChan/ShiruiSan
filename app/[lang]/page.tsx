import dynamic from "next/dynamic";

const PortfolioAppClient = dynamic(() => import("../(site)/components/PortfolioAppClient"), { ssr: false });

export default function LangHome() {
  // Рендерим одну страницу со всем контентом (как просили)
  return <PortfolioAppClient />;
}
