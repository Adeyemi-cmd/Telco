import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              TELCO.PREMIUM
            </Link>
            <p className={styles.tagline}>
              Setting the global standard for premium telecommunications and hardware design.
            </p>
            <div className={styles.social}>
              <span className="material-symbols-outlined">public</span>
              <span className="material-symbols-outlined">share</span>
              <span className="material-symbols-outlined">video_library</span>
            </div>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Products</h5>
            <ul className={styles.columnList}>
              <li><Link href="/">Model Ultra</Link></li>
              <li><Link href="/">Model Pro</Link></li>
              <li><Link href="/">Model Air</Link></li>
              <li><Link href="/accessories">Accessories</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Support</h5>
            <ul className={styles.columnList}>
              <li><Link href="/support">Help Center</Link></li>
              <li><Link href="/support">Warranty</Link></li>
              <li><Link href="/support">Shipping</Link></li>
              <li><Link href="/support">Returns</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5 className={styles.columnTitle}>Company</h5>
            <ul className={styles.columnList}>
              <li><Link href="/">Our Story</Link></li>
              <li><Link href="/">Newsroom</Link></li>
              <li><Link href="/">Careers</Link></li>
              <li><Link href="/support">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>&copy; 2024 TELCO.PREMIUM. ALL RIGHTS RESERVED.</span>
          <div className={styles.links}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
