// app/layout.tsx (или app/(site)/layout.tsx)
import { Providers } from "./(site)/Providers"; // путь подстрой по факту

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}