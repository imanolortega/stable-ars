import "./globals.css";
import { blankSpace } from "@/utils/common";
import { Inter } from "next/font/google";
import Image from "next/image";
import LoadingHomeSections from "@/components/home-sections/loading-home-sections";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Loading() {
  return (
    <>
      <main className={`${styles["main"]} ${inter.className}`}>
        <header className={styles["header"]}>
          <h1 style={{ opacity: 0, position: "absolute" }}>
            Stablecoins en Argentina
          </h1>
          <div className={styles["logo"]}>
            <Image
              width={40}
              height={40}
              src="/stable-ars.png"
              alt="Stablecoins en Argentina"
            />
            <p>STABLEARS</p>
          </div>
          <div className={styles["data"]}>
            <p>Actualizando...</p>
          </div>
        </header>
        <LoadingHomeSections />
      </main>
      <footer className={styles["footer"]}>
        <p>Actualizando...</p>
        <p>
          Datos obtenidos a través de la API de{blankSpace}
          <a
            className={styles["link"]}
            href="https://criptoya.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CriptoYa.
          </a>
        </p>
        <p>
          {blankSpace}Web por{blankSpace}
          <a
            className={styles["link"]}
            href="https://imanolortega.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imanol.
          </a>
        </p>
      </footer>
    </>
  );
}
