import "./globals.css";
import Image from "next/image";
import styles from "./page.module.scss";
import { blankSpace } from "@/utils/common";

export default function Loading() {
  return (
    <>
      <main className={styles["main"]}>
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
