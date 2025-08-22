"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Heart className={styles.icon} />
              <span className={styles.text}>SunnahSquad</span>
            </Link>
          </div>

          <div className={styles.links}>
            <Link
              href="/"
              className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`${styles.link} ${
                isActive("/events") ? styles.active : ""
              }`}
            >
              Events
            </Link>
            <Link
              href="/safety"
              className={`${styles.link} ${
                isActive("/safety") ? styles.active : ""
              }`}
            >
              Safety Instructions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
