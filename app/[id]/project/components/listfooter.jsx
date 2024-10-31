import { ButtonWeb } from "@/components/button/buttons";
import styles from "./listfooter.module.scss";

const ListFooter = ({ buttons }) => {
  return (
    <ul className={styles.listButtons}>
      {buttons.map((button, index) => (
        <li key={index}>
          <ButtonWeb href={button.href} label={button.label} />
        </li>
      ))}
    </ul>
  );
};

export default ListFooter;
