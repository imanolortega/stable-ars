import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ArrowBtn from "@/components/arrow-btn/arrow-btn";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./layout.module.scss";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics/google-analytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Stablears | Cotizaciones de stablecoins en Argentina | Cotización del Dólar Crypto",
  description:
    "De Stables a ARS. De ARS a Stables. Cotizaciones de stablecoins en Argentina: DAI, USDC, USDT en pesos argentinos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="7SSZwPzF4sLxKlTbnoS4RgTjVTctnEI9vVRzLBzcRGs"
      />
      <GoogleAnalytics />
      <body>
        <ArrowBtn />
        <Header />
        <main className={`${styles["main"]} ${inter.className}`}>
          {children}
          <SpeedInsights />
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
