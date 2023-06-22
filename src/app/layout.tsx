import RouteAnimate from "@component/route";
import "./globals.css";
import Header from "@component/header";
import { Montserrat } from "next/font/google";

const antonio = Montserrat({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${antonio.className} bg-stone-900 `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
