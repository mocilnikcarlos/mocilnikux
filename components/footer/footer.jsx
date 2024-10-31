"use client";

import IconTopPage from "../svg/btntop";
import styles from "./footer.module.scss";

const Footer = ({ children, className }) => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (400 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.contentFooter} ${className}`}>{children}</div>
      <button onClick={scrollToTop} className={styles.scrollToTop}>
        <IconTopPage />
      </button>
    </footer>
  );
};

export default Footer;
