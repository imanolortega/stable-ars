import styles from "./page.module.css";
import {
  findBestAskPrice,
  findBestBidPrice,
  findLowestSpread,
  getCryptoCurrencies,
} from "@/utils/crypto";
import CryptoCard from "./crypto-card/crypto-card";

export default async function Home() {
  const data = await getCryptoCurrencies();
  const bestDAIAsk = findBestAskPrice(data, "dai");
  const bestUSDCAsk = findBestAskPrice(data, "usdc");
  const bestUSDTAsk = findBestAskPrice(data, "usdt");

  const bestDAIBid = findBestBidPrice(data, "dai");
  const bestUSDCBid = findBestBidPrice(data, "usdc");
  const bestUSDTBid = findBestBidPrice(data, "usdt");

  const lowestDAISpread = findLowestSpread(data, "dai");
  const lowestUSCDSpread = findLowestSpread(data, "usdc");
  const lowestUSDTSpread = findLowestSpread(data, "usdt");

  return (
    <main className={styles.main}>
      <h1>Precios de Stablecoins en Argentina</h1>
      <section>
        <div className={styles.header}>
          <h2>Mejores Precios</h2>
        </div>
        <div className={styles.center}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>DAI</h3>
              <p>
                Comprar: {bestDAIAsk?.exchange} a ${bestDAIAsk?.value}{" "}
              </p>
              <p>
                Vender: {bestDAIBid?.exchange} a ${bestDAIBid?.value}
              </p>
              <p>
                Spread: {lowestDAISpread?.exchange} a ${lowestDAISpread?.value}
              </p>
            </div>
            <div className={styles.card}>
              <h3>USDC</h3>
              <p>
                Comprar: {bestUSDCAsk?.exchange} a ${bestUSDCAsk?.value}{" "}
              </p>
              <p>
                Vender: {bestUSDCBid?.exchange} a ${bestUSDCBid?.value}
              </p>
              <p>
                Spread: {lowestUSCDSpread?.exchange} a $
                {lowestUSCDSpread?.value}
              </p>
            </div>
            <div className={styles.card}>
              <h3>USDT</h3>
              <p>
                Comprar: {bestUSDTAsk?.exchange} a ${bestUSDTAsk?.value}{" "}
              </p>
              <p>
                Vender: {bestUSDTBid?.exchange} a ${bestUSDTBid?.value}
              </p>
              <p>
                Spread: {lowestUSDTSpread?.exchange} a $
                {lowestUSDTSpread?.value}
              </p>
            </div>
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
