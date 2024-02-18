import styles from "../../app/page.module.scss";
import LoadingCard from "../crypto-card/loading-card/loading-card";

export default function LoadingCards() {
  const cards = ["dai", "usdc", "usdt"];
  return (
    <div className={styles["center"]}>
      <div className={styles["grid"]}>
        {cards.map((currency: any) => {
          return <LoadingCard currency={currency} key={currency} />;
        })}
      </div>
    </div>
  );
}
