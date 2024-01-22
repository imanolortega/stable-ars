import styles from "./home-sections.module.scss";
import SelectedExchange from "@/components/selected-exchange/selected-exchange";
import BestPrices from "@/components/best-prices/best-prices";
import AveragePrices from "@/components/average-prices/average-prices";

interface HomeSectionsProps {
  average: any;
  currencies: string[];
  data: {
    [currency: string]: {
      ask: number;
      bid: number;
      time: number;
    };
  };
}

export default function HomeSections({
  average,
  currencies,
  data,
}: HomeSectionsProps) {
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

  return (
    <>
      {homeSections.map((section) => (
        <section key={section.title}>
          <div className={styles["section-header"]}>
            <h2 className={section.classNameTitle}>{section.title}</h2>
          </div>
          {section.component}
        </section>
      ))}
    </>
  );
}
