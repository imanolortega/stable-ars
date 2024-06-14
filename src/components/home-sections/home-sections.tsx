import styles from "./home-sections.module.scss";
import SelectedExchange from "@/components/selected-exchange/selected-exchange";
import BestPrices from "@/components/best-prices/best-prices";
import AveragePrices from "@/components/average-prices/average-prices";
import { formatTimestampToDateTime } from "@/utils/common";

interface HomeSectionsProps {
  average: any;
  currencies: string[];
  data: Array<{
    exchange: string;
    name: string;
    data: Record<string, any>;
  }>;
}

export default function HomeSections({
  average,
  currencies,
  data,
}: HomeSectionsProps) {
  let lastUpdate = "No data available";
  if (
    data &&
    data[0] &&
    data[0].data &&
    data[0].data.dai &&
    data[0].data.dai.time
  ) {
    lastUpdate = formatTimestampToDateTime(data[0].data.dai.time);
  }

  const homeSections = [
    {
      title: "Cotizaciones por exchange",
      classNameTitle: styles["selected-exchange-title"],
      component: <SelectedExchange currencies={currencies} data={data} />,
      isFirstSection: true,
    },
    {
      title: "Promedio de cotizaciones",
      classNameTitle: "",
      component: <AveragePrices currencies={currencies} average={average} />,
      isFirstSection: false,
    },
    {
      title: "Mejores cotizaciones",
      classNameTitle: "",
      component: <BestPrices currencies={currencies} data={data} />,
      isFirstSection: false,
    },
  ];

  return (
    <>
      {homeSections.map((section) => (
        <section key={section.title}>
          <div className={styles["section-header"]}>
            <h2 className={section.classNameTitle}>{section.title}</h2>
            {section.isFirstSection && (
              <p className={styles["date"]}>
                Última actualización {lastUpdate}
              </p>
            )}
          </div>
          {section.component}
        </section>
      ))}
    </>
  );
}
