import { ButtonNav } from "../button/buttons";
import styles from "./error.module.scss";

const ErrorComponent = ({
  errorCaseStudy,
  errorDescription,
  errorPrototype,
}) => {
  const errorMessage =
    errorCaseStudy ||
    errorDescription ||
    errorPrototype ||
    "No se pudieron cargar los datos";

  return (
    <div className={styles.contentnamefail}>
      <h3 className={styles.title}>{errorMessage}</h3>
      <ButtonNav href={"/"} label={"Volver al portafolio"} />
    </div>
  );
};

export default ErrorComponent;
