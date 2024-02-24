"use client";
import { useEffect, useState } from "react";
import { cryptoInfo } from "@/utils/info";
import Link from "next/link";
import ScrollTop from "../scroll-top/scroll-top";
import styles from "./aside.module.scss";

export default function Aside() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      className={`${styles["aside"]} ${isVisible ? styles["fixedAside"] : ""}`}
    >
      <h3>Contenido</h3>
      <ul>
        <li>
          <ScrollTop>Stablecoins</ScrollTop>
        </li>
        {cryptoInfo.map((crypto) => {
          return (
            <li key={crypto.url}>
              <Link href={`#${crypto.url}`} scroll={true}>
                {crypto.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
