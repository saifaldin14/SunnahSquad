import Link from "next/link";
import { Heart, MapPin, Clock, Mail } from "lucide-react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About */}
          <div className={styles.section}>
            <div className={styles.brand}>
              <Heart className={styles.icon} />
              <span className={styles.name}>SunnahSquad</span>
            </div>
            <p className={styles.description}>
              Following the Sunnah through service to our community at Ray of
              Hope soup kitchen.
            </p>
            <p className={styles.quote}>
              &ldquo;And whoever saves a life, it is as if he has saved mankind
              entirely.&rdquo; - Quran 5:32
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3>Quick Links</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className={styles.link}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/safety" className={styles.link}>
                  Safety Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3>Get Involved</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} />
                <span className={styles.text}>Downtown Community Center</span>
              </div>
              <div className={styles.contactItem}>
                <Clock className={styles.icon} />
                <span className={styles.text}>
                  Saturdays, 4:00 PM - 7:00 PM
                </span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} />
                <span className={styles.text}>
                  Contact us through events page
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <p className={styles.copyright}>
            © 2025 SunnahSquad. Serving with love and compassion.
          </p>
        </div>
      </div>
    </footer>
  );
}
