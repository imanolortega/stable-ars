import styles from "./card.module.scss";
import { Dai, Usdc, Usdt } from "./icons/icons";

interface CryptoCardProps {
  ask: string;
  bid: string;
  currency: string;
  spread: string;
}

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
  return (
    <div>
      <div className={styles.card}>
      <div className={styles["card-header"]}>
        <div>{currencyIcons[currency]}</div>
        <h3>{currency.toUpperCase()}</h3>
      </div>
      <p>{ask}</p>
      <p>{bid}</p>
      <p>{spread}</p>
    </div>
    </div>
  );
};

export default CryptoCard;
