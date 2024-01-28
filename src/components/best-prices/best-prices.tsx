import {
  findBestAskPrice,
  findBestBidPrice,
  findLowestSpread,
} from "@/utils/crypto";
import CryptoCard from "../crypto-card/crypto-card";
import styles from "../../app/page.module.scss";
import { Suspense } from "react";

export default function BestPrices({
  currencies,
  data,
}: {
  currencies: string[];
  data: any;
}) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
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
                ask={`${bestAsk?.value}`}
                askExchange={bestAsk?.exchange}
                bid={`${bestBid?.value}`}
                bidExchange={bestBid?.exchange}
                spread={`${lowestSpread?.value}`}
                spreadExchange={lowestSpread?.exchange}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
