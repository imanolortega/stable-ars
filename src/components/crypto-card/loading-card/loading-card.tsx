import styles from "../card.module.scss";
import { colorMap, currencyIcons } from "../crypto-card";

export default function LoadingCard({ currency }: { currency: string }) {
  const { primaryGlowColor } = colorMap[currency] || {};
  const cardStyle = {
    "--primary-glow": primaryGlowColor,
  } as React.CSSProperties;
  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles["card-header"]}>
        <div>{currencyIcons[currency]}</div>
        <h3>{currency.toUpperCase()}</h3>
      </div>
      <div className={styles["card-body"]}>
        <p>
          <span>Comprá a</span>$0
        </p>
        <p>
          <span>Vendé a</span>$0
        </p>
      </div>
      <div className={styles["card-footer"]}>
        <p>
          <span>Spread</span>$0
        </p>
      </div>
    </div>
  );
}
