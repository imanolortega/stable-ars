import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./layout.module.scss";
import { Inter } from "next/font/google";
import ScrollTop from "@/components/scroll-top/scroll-top";
import ArrowBtn from "@/components/arrow-btn/arrow-btn";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stablears | Cotizaciones de stablecoins en Argentina",
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
