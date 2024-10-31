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
    <Link href={href} className={styles.buttonWeb}>
      {label}
    </Link>
  );
};

export { ButtonNav, ButtonWeb };
