"use client";
import { useEffect, useState } from "react";
import styles from "./menu-mobile.module.scss";
import Link from "next/link";
import { MENU_LINKS } from "@/utils/info";
import Footer from "@/components/footer/footer";

export default function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [menuOpen]);

  const iconColor = "#fafafa";

  return (
    <div className={styles["navbar-mobile"]}>
      <button
        aria-label={menuOpen ? "close-menu-icon" : "open-menu-icon"}
        className={styles["menu-icon"]}
        onClick={toggleMenu}
      >
        <span>
          {menuOpen ? (
            <svg
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          ) : (
            <svg
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`${styles["navbar-inner"]} ${
          menuOpen ? styles["open"] : ""
        }`}
      >
        <button
          aria-label="close-menu-icon"
          className={styles["close-icon"]}
          onClick={toggleMenu}
        >
          <svg
            fill={iconColor}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <nav>
          <ol>
            {MENU_LINKS.map((link) => {
              return (
                <li key={link.url}>
                  <Link href={link.url} onClick={closeMenu}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ol>
          <div>
            <Footer />
          </div>
        </nav>
      </div>
    </div>
  );
}
