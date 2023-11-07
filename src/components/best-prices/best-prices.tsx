import {
  findBestAskPrice,
  findBestBidPrice,
  findLowestSpread,
} from "@/utils/crypto";
import CryptoCard from "../crypto-card/crypto-card";
import styles from "../../app/page.module.scss";

export default function BestPrices({
  currencies,
  data,
}: {
  currencies: string[];
  data: any;
}) {
  return (
    <div className={styles["center"]}>
      <div className={styles["grid"]}>
        {currencies.map((currency: any) => {
          const bestAsk = findBestAskPrice(data, currency);
          const bestBid = findBestBidPrice(data, currency);
          const lowestSpread = findLowestSpread(data, currency);
          return (
            <CryptoCard
              key={currency}
              currency={currency}
              ask={`Comprar: $${bestAsk?.value} en ${bestAsk?.exchange}`}
              bid={`Vender: ${bestBid?.value} en ${bestBid?.exchange}`}
              spread={`Spread: ${lowestSpread?.value} en ${lowestSpread?.exchange}`}
            />
          );
        })}
      </div>
    </div>
  );
}
