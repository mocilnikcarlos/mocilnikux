import styles from "./loadingsendemail.module.scss";

const LoadingSendEmail = () => {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSendEmail;
