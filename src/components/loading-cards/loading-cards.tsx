import LoadingCard from "../crypto-card/loading-card/loading-card";
import styles from "../selected-exchange/selected-exchange.module.scss";

export default function LoadingCards({ select }: { select: boolean }) {
  const cards = ["dai", "usdc", "usdt"];
  return (
    <>
      {select && (
        <label className={styles["select-wrapper"]}>
          <select aria-label="select-loader" value="loading">
            <option value="dummy-value">Actualizando...</option>
          </select>
        </label>
      )}
      <div className={styles["center"]}>
        <div className={styles["grid"]}>
          {cards.map((currency: any) => {
            return <LoadingCard currency={currency} key={currency} />;
          })}
        </div>
      </div>
    </>
  );
}
