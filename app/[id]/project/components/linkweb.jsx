import Anchor from "@/components/svg/anchor";
import styles from "./linkweb.module.scss";

const LinkWeb = ({ href, label }) => {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Anchor />
      <p>Plataforma {label}</p>
    </a>
  );
};

export default LinkWeb;
