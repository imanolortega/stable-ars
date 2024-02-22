import Image from "next/image";
import styles from "../../app/layout.module.scss";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default async function Header() {
  return (
    <header className={`${styles["header"]} ${inter.className}`}>
      <h1 style={{ opacity: 0, position: "absolute", top: -50 }}>
        Stablecoins en Argentina
      </h1>
      <Link href="/" className={styles["logo"]}>
        <Image
          width={40}
          height={40}
          src="/stable-ars.png"
          alt="Stablecoins en Argentina"
        />
        <p>STABLEARS</p>
      </Link>
      <div className={styles["navbar"]}>
        <nav>
          <ol>
            <li>
              <Link href="/sobre-stablecoins">Sobre Stablecoins</Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
