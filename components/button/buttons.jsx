import Link from "next/link";
import styles from "./buttons.module.scss";

const ButtonNav = ({ label, href, isActive }) => {
  return (
    <Link
      href={href}
      className={`${styles.buttonNav} ${isActive ? styles.active : ""}`}
    >
      {label}
    </Link>
  );
};

const ButtonWeb = ({ label, href }) => {
  return (
    <a
      href={href}
      className={styles.buttonWeb}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export { ButtonNav, ButtonWeb };
