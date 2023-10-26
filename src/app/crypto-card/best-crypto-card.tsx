import styles from "./card.module.scss";
import { Dai, Usdc, Usdt } from "./icons/icons";

interface BestCryptoCardProps {
  ask: { exchange: string; value: number } | null;
  bid: { exchange: string; value: number } | null;
  currency: string;
  spread: { exchange: string; value: number } | null;
}

const BestCryptoCard: React.FC<BestCryptoCardProps> = ({
  ask,
  bid,
  currency,
  spread }) => {
  const currencyIcons: Record<string, any> = {
    dai: <Dai />,
    usdc: <Usdc />,
    usdt: <Usdt />,
  };

  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <div>
          {currencyIcons[currency]}
        </div>
        <h3>{currency.toUpperCase()}</h3>
      </div>
      <p>
        Comprar: ${ask?.value} en {ask?.exchange}
      </p>
      <p>
        Vender: ${bid?.value} en {bid?.exchange}
      </p>
      <p>
        Spread: ${spread?.value} en {spread?.exchange}
      </p>
    </div>
  );
};

export default BestCryptoCard;
