import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ArrowBtn from "@/components/arrow-btn/arrow-btn";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./layout.module.scss";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Stablears | Cotizaciones de stablecoins en Argentina | Cotización del Dólar Crypto",
  description:
    "Cotizaciones de stablecoins en Argentina: DAI, USDC, USDT en pesos argentinos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <link rel="icon" href="/favicon.ico" />
      <body>
        <ArrowBtn />
        <Header />
        <main className={`${styles["main"]} ${inter.className}`}>
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
