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
    <div className={styles["center"]}>
      <div className={styles["grid"]}>
        {currencies.map((currency) => (
          <CryptoCard
            key={currency}
            currency={currency}
            ask={`Compra: $${average[currency].averageAskPrice}`}
            bid={`Venta: $${average[currency].averageBidPrice}`}
            spread={`Spread: $${average[currency].averageSpread}`}
          />
        ))}
      </div>
    </div>
  );
}
