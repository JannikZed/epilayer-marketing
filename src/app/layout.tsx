import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EpiLayer — Buchung vorbereiten, Freigabe behalten",
    template: "%s · EpiLayer",
  },
  description:
    "EpiLayer bereitet Bestellungen, Preislisten und Belege für euer ERP vor. Ihr prüft und gebt frei.",
  metadataBase: new URL("https://epilayer.de"),
  openGraph: {
    title: "EpiLayer",
    description:
      "Bestellungen aus der Mail, Preislisten aus Excel — vorbereitet für euer ERP.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
