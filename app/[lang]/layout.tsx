import Providers from "../(site)/Providers";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "ru" | "en" };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers lang={params.lang}>{children}</Providers>
      </body>
    </html>
  );
}
