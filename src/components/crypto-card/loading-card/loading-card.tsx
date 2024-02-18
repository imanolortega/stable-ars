import styles from "../card.module.scss";

export default function LoadingCard() {
  return (
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <h3>Loading...</h3>
        </div>
        <div className={styles["card-body"]}>
          <p>
            <span>...</span>
          </p>
          <p>
            <span>...</span>
          </p>
        </div>
        <div className={styles["card-footer"]}>
          <p>
            <span>...</span>
          </p>
        </div>
      </div>
  );
}
