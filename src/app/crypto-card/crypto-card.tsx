import styles from "./card.module.scss";
import { Dai, Usdc, Usdt } from "./icons/icons";

interface CryptoCardProps {
  currency: string;
  exchangeData: {
    ask: string;
    bid: string;
  };
}

const CryptoCard: React.FC<CryptoCardProps> = ({ currency, exchangeData }) => {
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
      <p>Compra: ${parseFloat(exchangeData.ask).toFixed(2)}</p>
      <p>Venta: ${parseFloat(exchangeData.bid).toFixed(2)}</p>
      <p>
        Spread: $
        {(parseInt(exchangeData.ask) - parseInt(exchangeData.bid)).toFixed(2)}
      </p>
    </div>
  );
};

export default CryptoCard;
