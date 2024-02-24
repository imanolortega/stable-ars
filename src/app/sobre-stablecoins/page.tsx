import { ABOUT, cryptoInfo } from "@/utils/info";
import Aside from "@/components/aside/aside";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles["article-page"]}>
      <Aside />
      <article className={styles["article"]}>
        <div className={styles["breadcrumb"]}>
          <nav aria-label="breadcrumb" role="navigation">
            <ol>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li><span>{">"}</span></li>
              <li><span>Sobre Stablecoins</span></li>
            </ol>
          </nav>
        </div>
        <div className={styles["header"]}>
          <h1>¿Qué son las Stablecoins?</h1>
        </div>
        <div className={styles["body"]}>
          <section id="about">
            <p>{ABOUT}</p>
          </section>
          {cryptoInfo.map((crypto) => {
            return (
              <section key={crypto.url} id={crypto.url}>
                <h3>{crypto.title}</h3>
                <p>{crypto.content}</p>
              </section>
            );
          })}
        </div>
      </article>
    </div>
  );
}
