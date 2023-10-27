import styles from "./page.module.scss";
import {
  calculateAverages,
  findBestAskPrice,
  findBestBidPrice,
  findLowestSpread,
  getCryptoCurrencies,
} from "@/utils/crypto";
import CryptoCard from "./crypto-card/crypto-card";

export default async function Home() {
  const data = await getCryptoCurrencies();
  const currencies = ["dai", "usdc", "usdt"];
  const averate = calculateAverages(data);
  console.log(averate)
  return (
    <main className={styles["main"]}>
      <div className={styles["header"]}>
        <h1>Stablecoins en Argentina</h1>
      </div>
      <section>
        <div className={styles["section-header"]}>
          <h2>Promedio de Precios</h2>
        </div>
        <div className={styles["center"]}>
          <div className={styles["grid"]}>
            {currencies.map((currency) => (
              <CryptoCard
                key={currency}
                currency={currency}
                ask={`Compra: $${averate[currency].averageAskPrice}`}
                bid={`Venta: $${averate[currency].averageBidPrice}`}
                spread={`Spread: $${averate[currency].averageSpread}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles["section-header"]}>
          <h2>Mejores Precios</h2>
        </div>
        <div className={styles["center"]}>
          <div className={styles["grid"]}>
            {currencies.map((currency) => {
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
      </section>
      <section>
        {data.map((exchange) => (
          <div key={exchange.name}>
            <div className={styles["section-header"]}>
              <h2>{exchange.name}</h2>
            </div>
            <div className={styles["center"]}>
              <div className={styles["grid"]}>
                {Object.entries(exchange.data).map(
                  ([currency, exchangeData]) => (
                    <CryptoCard
                      key={currency}
                      currency={currency}
                      ask={`Compra:$${parseFloat(exchangeData.ask).toFixed(2)}`}
                      bid={`Venta: $${parseFloat(exchangeData.bid).toFixed(2)}`}
                      spread={`Spread: $
                      ${(
                        parseInt(exchangeData.ask) - parseInt(exchangeData.bid)
                      ).toFixed(2)}`}
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
