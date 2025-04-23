import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";


export const metadata: Metadata = {
  title: "Portifólio de Gabriel Felipe",
  description: "Portifólio de desenvolvedor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body
        className={`font-inter bg-light-900 dark:bg-dark-400`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer className="pb-10" />
        </ThemeProvider>
      </body>
    </html>
  );
}
