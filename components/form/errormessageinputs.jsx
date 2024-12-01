import styles from "./errormessageinputs.module.scss";

const ErrorMessage = ({ displayError }) => {
  return <p className={styles.errorMessage}>{displayError}</p>;
};

export default ErrorMessage;
