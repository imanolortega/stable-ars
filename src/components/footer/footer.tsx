import { blankSpace } from "@/utils/common";
import styles from "../../app/page.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p style={{ marginBottom: "0.5rem" }}>
        Datos obtenidos a través de la API de{blankSpace}
        <a
          className={styles["link"]}
          href="https://criptoya.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CriptoYa.
        </a>
      </p>
      <p>
        {blankSpace}Web por{blankSpace}
        <a
          className={styles["link"]}
          href="https://imanolortega.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imanol.
        </a>
      </p>
    </footer>
  );
}
