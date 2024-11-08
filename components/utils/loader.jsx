"use client";

import { useEffect, useState } from "react";
import styles from "./loader.module.scss";

const Loader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const totalDuration = 2000;
    const intervalDuration = 10;
    const increment = (intervalDuration / totalDuration) * 180;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className={styles.loader}>
      <h2 className={styles.title}>Cargando</h2>
      <div className={styles.progressText}>{Math.round(progress)}%</div>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loader;
