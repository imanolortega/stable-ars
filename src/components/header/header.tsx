import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import MenuMobile from "./menu-mobile/menu-mobile";
import { MENU_LINKS } from "@/utils/info";
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
      <div className={styles["navbar-desktop"]}>
        <nav>
          <ol>
            {MENU_LINKS.map((link) => {
              return (
                <li key={link.url}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <MenuMobile />
    </header>
  );
}
