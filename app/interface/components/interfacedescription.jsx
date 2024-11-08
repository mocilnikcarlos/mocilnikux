import styles from "@/components/componentspages/jobdescription.module.scss";

const InterfaceDescription = () => {
  return (
    <section className={styles.sectionJobDescription}>
      <div className={styles.contentJobDescription}>
        <ul className={styles.listDescription}>
          <li className={styles.itemDetails}>
            <h3 className={styles.title}>Herramienta de diseño:</h3>
            <p className={styles.descriptonList}>Figma (avanzado)</p>
          </li>
          <li className={styles.itemDetails}>
            <h3 className={styles.title}>Herramienta de video:</h3>
            <p className={styles.descriptonList}>Wondershare Filmora</p>
          </li>
        </ul>
        <div className={styles.detailsDescription}>
          <h3 className={styles.title}>Sobre la interfaz</h3>
          <p className={styles.descriptonDetails}>
            De vez en cuando, diseño algunas interfaces de usuario para
            practicar mis habilidades y expandir mi creatividad. Es una manera
            de desafiarme y seguir aprendiendo, mientras desarrollo soluciones
            visuales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterfaceDescription;
