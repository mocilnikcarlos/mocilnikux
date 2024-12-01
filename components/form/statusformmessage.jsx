import styles from "./statusformmessage.module.scss";

const StatusFormSuccess = ({ onClick }) => {
  return (
    <div className={styles.message}>
      <p>
        ¡Muchas gracias por tu mensaja!🚀 Estare respondiendo lo mas rápido
        posible
      </p>
      <button type="button" className={styles.button} onClick={onClick}>
        Enviar otro mensaje
      </button>
    </div>
  );
};

const StatusFormError = () => {
  return (
    <div className={styles.message}>
      <p>
        Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo. 😓
      </p>
      <button type="button" className={styles.button} onClick={onClick}>
        Reintentar
      </button>
    </div>
  );
};

export { StatusFormSuccess, StatusFormError };
