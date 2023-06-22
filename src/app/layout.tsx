import "./globals.css";
import Header from "@component/header";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Peter Sahanaya - Front End Dev",
  description:
    "Welcome to my personal portfolio website. I am a skilled and experienced front-end developer with a passion for creating visually stunning and user-friendly websites and applications. Browse my work and contact me to discuss your next project.",
  keywords: ["Next JS", "Three JS", "Portfolio"],
  creator: "Peter Sahanaya",
  authors: [
    {
      name: "Peter Sahanaya",
      url: "https://linkedin.com/in/peter-sahanaya",
    },
  ],
  icons : ""
};

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
