import styles from "./card.module.scss";
import { Dai, Usdc, Usdt } from "./icons/icons";

interface CryptoCardProps {
  ask: string;
  bid: string;
  currency: string;
  spread: string;
}

const colorMap: any = {
  dai: {
    primaryGlowColor: "conic-gradient(from 180deg at 50% 50%, #ffff0033 0deg, #ffcc001d 55deg, #d4ff0028 120deg, #99ff0029 160deg, transparent 360deg)",
  },
  usdc: {
    primaryGlowColor: "conic-gradient(from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg)",
  },
  usdt: {
    primaryGlowColor: "conic-gradient(from 180deg at 50% 50%, #00ff0033 0deg, #00cc003d 55deg, #16ea162b 120deg, #00990033 160deg, transparent 360deg)",
  },
};

const CryptoCard: React.FC<CryptoCardProps> = ({
  ask,
  bid,
  currency,
  spread,
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
      <p>{ask}</p>
      <p>{bid}</p>
      <p>{spread}</p>
    </div>
  );
};

export default CryptoCard;
