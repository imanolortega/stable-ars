import styles from "./page.module.css";
import {
  findBestAskPrice,
  findBestBidPrice,
  findLowestSpread,
  getCryptoCurrencies,
} from "@/utils/crypto";
import CryptoCard from "./crypto-card/crypto-card";
import BestCryptoCard from "./crypto-card/best-crypto-card";

export default async function Home() {
  const data = await getCryptoCurrencies();
  const currencies = ["dai", "usdc", "usdt"]

  return (
    <main className={styles.main}>
      <h1>Precios de Stablecoins en Argentina</h1>
      <section>
        <div className={styles.header}>
          <h2>Mejores Precios</h2>
        </div>
        <div className={styles.center}>
          <div className={styles.grid}>
            {
              currencies.map((currency) => (
                <BestCryptoCard
                  key={currency}
                  currency={currency}
                  ask={findBestAskPrice(data, currency)}
                  bid={findBestBidPrice(data, currency)}
                  spread={findLowestSpread(data, currency)}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        {data.map((exchange) => (
          <div key={exchange.name}>
            <div className={styles.header}>
              <h2>{exchange.name}</h2>
            </div>
            <div className={styles.center}>
              <div className={styles.grid}>
                {Object.entries(exchange.data).map(
                  ([currency, exchangeData]) => (
                    <CryptoCard
                      key={currency}
                      currency={currency}
                      exchangeData={exchangeData}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
