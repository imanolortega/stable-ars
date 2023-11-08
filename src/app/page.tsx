import styles from "./page.module.scss";
import { calculateAverages, getCryptoCurrencies } from "@/utils/crypto";
import SelectedExchange from "@/components/selected-exchange/selected-exchange";
import BestPrices from "@/components/best-prices/best-prices";
import AveragePrices from "@/components/average-prices/average-prices";
import CryptoCard from "@/components/crypto-card/crypto-card";

export default async function Home() {
  const data = await getCryptoCurrencies();
  const currencies = ["dai", "usdc", "usdt"];
  const average = calculateAverages(data);

  const homeSections = [
    {
      title: "Cotizaciones por exchange",
      classNameTitle: styles["selected-exchange-title"],
      component: <SelectedExchange currencies={currencies} data={data} />,
    },
    {
      title: "Promedio de cotizaciones",
      classNameTitle: '',
      component: <AveragePrices currencies={currencies} average={average} />,
    },
    {
      title: "Mejores cotizaciones",
      classNameTitle: '',
      component: <BestPrices currencies={currencies} data={data} />,
    },
  ];

  return (
    <main className={styles["main"]}>
      <div className={styles["header"]}>
        <h1>Stablecoins en Argentina</h1>
      </div>
      {homeSections.map((section) => (
        <section key={section.title}>
          <div className={styles["section-header"]}>
            <h2 className={section.classNameTitle}>{section.title}</h2>
          </div>
          {section.component}
        </section>
      ))}
    </main>
  );
}
