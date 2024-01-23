import { calculateAverages, getCryptoData } from "@/utils/crypto";
import { formatTimestampToDateTime } from "@/utils/common";
import HomeSections from "@/components/home-sections/home-sections";
import Image from "next/image";
import styles from "./page.module.scss";

const blankSpace = <>&nbsp;</>;

export default async function Home() {
  const data = await getCryptoData();
  const currencies = ["dai", "usdc", "usdt"];
  const average = await calculateAverages(data);
  const lastUpdate = await formatTimestampToDateTime(data[0].data.dai.time);

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
            <p>Última actualización {lastUpdate}</p>
          </div>
        </header>
        <HomeSections average={average} currencies={currencies} data={data} />
      </main>
      <footer className={styles["footer"]}>
        <p>Última actualización {lastUpdate}.</p>
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
