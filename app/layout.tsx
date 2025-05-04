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
      <ThemeProvider>
        <body>
          <Navbar />
          <main className="px-3">{children}</main>
          <Footer className="pb-10 px-3" />
        </body>
      </ThemeProvider>
    </html>
  );
}
