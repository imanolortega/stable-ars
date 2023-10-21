import styles from "../page.module.css";

interface CryptoCardProps {
  currency: string;
  exchangeData: {
    ask: string;
    bid: string;
  };
}

const CryptoCard: React.FC<CryptoCardProps> = ({ currency, exchangeData }) => {
  return (
    <div className={styles.card}>
      <h3>{currency.toUpperCase()}</h3>
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
