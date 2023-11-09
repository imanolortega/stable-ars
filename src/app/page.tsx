import styles from "./page.module.scss";
import { calculateAverages, getCryptoCurrencies } from "@/utils/crypto";
import SelectedExchange from "@/components/selected-exchange/selected-exchange";
import BestPrices from "@/components/best-prices/best-prices";
import AveragePrices from "@/components/average-prices/average-prices";
import Image from "next/image";
import { formatDateToSpanish, formatTimestampToDateTime } from "@/utils/common";

export default async function Home() {
  const data = await getCryptoCurrencies();
  const currencies = ["dai", "usdc", "usdt"];
  const average = calculateAverages(data);
  const lastUpdate = formatTimestampToDateTime(data[0].data.dai.time);

  const homeSections = [
    {
      title: "Cotizaciones por exchange",
      classNameTitle: styles["selected-exchange-title"],
      component: <SelectedExchange currencies={currencies} data={data} />,
    },
    {
      title: "Promedio de cotizaciones",
      classNameTitle: "",
      component: <AveragePrices currencies={currencies} average={average} />,
    },
    {
      title: "Mejores cotizaciones",
      classNameTitle: "",
      component: <BestPrices currencies={currencies} data={data} />,
    },
  ];

  const date = new Date();
  const formatDate = formatDateToSpanish(date);

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
        {homeSections.map((section) => (
          <section key={section.title}>
            <div className={styles["section-header"]}>
              <h2 className={section.classNameTitle}>{section.title}</h2>
            </div>
            {section.component}
          </section>
        ))}
      </main>
      <footer className={styles["footer"]}>
        Última actualización {lastUpdate}
      </footer>
    </>
  );
}
