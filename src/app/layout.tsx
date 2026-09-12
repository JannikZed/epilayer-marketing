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
    default: "EpilaYer — Der Layer über eurem ERP",
    template: "%s · EpilaYer",
  },
  description:
    "EpilaYer bereitet Bestellungen, Preislisten und Belege für euer ERP vor. Ihr prüft und gebt frei — ohne Migration.",
  metadataBase: new URL("https://epilayer.de"),
  openGraph: {
    title: "EpilaYer",
    description:
      "Der Layer über eurem ERP. Vorgänge vorbereiten, Freigabe behalten.",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
