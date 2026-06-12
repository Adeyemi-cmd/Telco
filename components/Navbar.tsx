import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";

const navLinks = [
  { href: "/", label: "Phones" },
  { href: "/accessories", label: "Accessories" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(`[data-active="true"]`) as HTMLElement | null;
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          TELCO.PREMIUM
        </Link>

        <div className={styles.desktopNav} ref={navRef}>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                data-active={isActive}
              >
                {link.label}
              </Link>
            );
          })}
          <div
            className={styles.indicator}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
        </div>

        <button className={styles.shopBtn}>Shop Now</button>

        <button
          className={styles.menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.activeMobile : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
