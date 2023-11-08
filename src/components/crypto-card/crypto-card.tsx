import styles from "./card.module.scss";
import { Dai, Usdc, Usdt } from "./icons/icons";

interface CryptoCardProps {
  ask: string;
  askExchange?: string;
  bid: string;
  bidExchange?: string;
  currency: string;
  spread: string;
  spreadExchange?: string;
}

const colorMap: any = {
  dai: {
    primaryGlowColor:
      "conic-gradient(from 180deg at 50% 50%, #ffff0044 0deg, #ffcc0033 55deg, #d4ff0040 120deg, #99ff0044 160deg, transparent 360deg)",
  },
  usdc: {
    primaryGlowColor:
      "conic-gradient(from 180deg at 50% 50%, #16abff55 0deg, #0885ff55 55deg, #54d6ff55 120deg, #0071ff55 160deg, transparent 360deg)",
  },
  usdt: {
    primaryGlowColor:
      "conic-gradient(from 180deg at 50% 50%, #00ff0044 0deg, #00cc0044 55deg, #16ea162b 120deg, #00990044 160deg, transparent 360deg)",
  },
};

const CryptoCard: React.FC<CryptoCardProps> = ({
  ask,
  askExchange,
  bid,
  bidExchange,
  currency,
  spread,
  spreadExchange,
}) => {
  const currencyIcons: Record<string, any> = {
    dai: <Dai />,
    usdc: <Usdc />,
    usdt: <Usdt />,
  };

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
          <span>Compra</span>
          ${ask}
          <span>{askExchange}</span>
        </p>
        <p>
          <span>Venta</span>
          ${bid}
          <span>{bidExchange}</span>
        </p>
      </div>
      <div className={styles["card-footer"]}>
        <p>
          <span>Spread</span>
          ${spread}
          <span>{spreadExchange}</span>
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;