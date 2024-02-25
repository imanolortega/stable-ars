"use client";
import { useEffect, useState } from "react";
import { cryptoInfo } from "@/utils/info";
import Link from "next/link";
import ScrollTop from "../scroll-top/scroll-top";
import styles from "./aside.module.scss";
import useScrollVisibility from "@/hooks/useScrollVisibility";

export default function Aside() {
  const isVisible = useScrollVisibility(300);

  return (
    <aside className={`${styles["aside"]} ${isVisible ? styles["fixed"] : ""}`}>
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
