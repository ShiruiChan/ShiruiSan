import Providers from "../(site)/Providers";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "ru" | "en" };
}) {
  return <Providers lang={params.lang}>{children}</Providers>;
}
