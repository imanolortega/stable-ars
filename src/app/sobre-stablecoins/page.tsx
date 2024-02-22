import { ABOUT, DAI, USDC, USDT } from "@/utils/info";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <article className={styles["article"]}>
      <div className={styles["header"]}>
        <h1>¿Qué son las Stablecoins?</h1>
      </div>
      <div className={styles["body"]}>
        <section>
          <p>{ABOUT}</p>
        </section>
        <section>
          <h3>DAI</h3>
          <p>{DAI}</p>
        </section>
        <section>
          <h3>USDC</h3>
          <p>{USDC}</p>
        </section>
        <section>
          <h3>USDT</h3>
          <p>{USDT}</p>
        </section>
      </div>
    </article>
  );
}
