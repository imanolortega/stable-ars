import { ABOUT } from "@/utils/info";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <article className={styles["article"]}>
      <div className={styles["header"]}>
        <h1>¿Qué son las Stablecoins?</h1>
      </div>
      <section className={styles["body"]}>
        <p>{ABOUT}</p>
      </section>
    </article>
  );
}
