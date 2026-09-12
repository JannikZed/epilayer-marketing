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
    default: "EpilaYer — KI-Automatisierung für euer ERP",
    template: "%s · EpilaYer",
  },
  description:
    "Mails, Excel und Scans mit KI auslesen und freigabereif ins ERP bringen. Automatisierung für Innendienst — ohne Migration.",
  metadataBase: new URL("https://epilayer.de"),
  openGraph: {
    title: "EpilaYer",
    description:
      "Mails, Excel und Scans automatisch ins ERP. Mit KI. Mit Freigabe.",
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
