"use client";
import { ReactNode } from "react";
import styles from "./scroll-top.module.scss";

export default function ScrollTop({ children }: { children: ReactNode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className={styles["btn"]} onClick={scrollToTop}>
      {children}
    </button>
  );
}
