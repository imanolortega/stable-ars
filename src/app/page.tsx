import styles from "./page.module.css";
import { getCryptoCurrencies } from "@/utils/crypto";

export default async function Home() {
  const data = await getCryptoCurrencies();

  return (
    <main className={styles.main}>
      {data.map((exchange) => (
        <section key={exchange.name}>
          <div className={styles.header}>
            <h2>{exchange.name}</h2>
          </div>
          <div className={styles.center}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>DAI</h2>
                <p>Compra: ${parseFloat(exchange.data.dai.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.dai.bid).toFixed(2)}</p>
              </div>
              <div className={styles.card}>
                <h2>USDC</h2>
                <p>Compra: ${parseFloat(exchange.data.usdc.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.usdc.bid).toFixed(2)}</p>
              </div>
              <div className={styles.card}>
                <h2>USDT</h2>
                <p>Compra: ${parseFloat(exchange.data.usdt.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.usdt.bid).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
