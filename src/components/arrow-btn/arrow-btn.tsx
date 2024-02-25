"use client";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import ScrollTop from "../scroll-top/scroll-top";
import styles from "./arrow-btn.module.scss";

export default function ArrowBtn() {
  const isVisible = useScrollVisibility(300);

  return (
    <div className={!isVisible ? styles["display"] : ""}>
      <ScrollTop />
    </div>
  );
}
