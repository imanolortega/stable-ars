import { Suspense } from "react";
import CryptoCard from "../crypto-card/crypto-card";
import styles from "../../app/page.module.scss";

export default function AveragePrices({
  currencies,
  average,
}: {
  currencies: string[];
  average: any;
}) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className={styles["center"]}>
        <div className={styles["grid"]}>
          {currencies.map((currency) => (
            <CryptoCard
              key={currency}
              currency={currency}
              ask={average[currency].averageAskPrice}
              bid={average[currency].averageBidPrice}
              spread={average[currency].averageSpread}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
