"use client";

import IconTopPage from "../svg/btntop";
import styles from "./footer.module.scss";

const Footer = ({ children, className }) => {
  const scrollToTop = () => {
    const totalScrollDistance = window.scrollY;
    const duration = 600;
    const stepTime = 15;
    const totalSteps = Math.floor(duration / stepTime);
    const scrollStep = totalScrollDistance / totalSteps;

    let currentStep = 0;

    const scrollInterval = setInterval(() => {
      if (currentStep < totalSteps) {
        window.scrollBy(0, -scrollStep);
        currentStep++;
      } else {
        clearInterval(scrollInterval);
        window.scrollTo(0, 0);
      }
    }, stepTime);
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
