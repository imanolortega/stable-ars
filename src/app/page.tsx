import styles from "./page.module.css";
import moment from "moment";
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
                <h3>DAI</h3>
                <p>Compra: ${parseFloat(exchange.data.dai.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.dai.bid).toFixed(2)}</p>
                <p>
                  Spread: $
                  {(exchange.data.dai.ask - exchange.data.dai.bid)
                    .toFixed(2)
                    .toString()}
                </p>
              </div>
              <div className={styles.card}>
                <h3>USDC</h3>
                <p>Compra: ${parseFloat(exchange.data.usdc.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.usdc.bid).toFixed(2)}</p>
                <p>
                  Spread: $
                  {(exchange.data.usdc.ask - exchange.data.usdc.bid)
                    .toFixed(2)
                    .toString()}
                </p>
              </div>
              <div className={styles.card}>
                <h3>USDT</h3>
                <p>Compra: ${parseFloat(exchange.data.usdt.ask).toFixed(2)}</p>
                <p>Venta: ${parseFloat(exchange.data.usdt.bid).toFixed(2)}</p>
                <p>
                  Spread: $
                  {(exchange.data.usdt.ask - exchange.data.usdt.bid)
                    .toFixed(2)
                    .toString()}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p>
              Última actualización:{" "}
              {moment
                .unix(exchange.data.usdc.time)
                .format("DD/MM/YYYY, HH:mm")}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
