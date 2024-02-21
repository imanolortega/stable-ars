import Image from "next/image";
import styles from "../../app/layout.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function Header() {
  return (
    <header className={`${styles["header"]} ${inter.className}`}>
      <h1 style={{ opacity: 0, position: "absolute" }}>
        Stablecoins en Argentina
      </h1>
      <div className={styles["logo"]}>
        <Image
          width={40}
          height={40}
          src="/stable-ars.png"
          alt="Stablecoins en Argentina"
        />
        <p>STABLEARS</p>
      </div>
      <div className={styles["data"]}>
      </div>
    </header>
  );
}
