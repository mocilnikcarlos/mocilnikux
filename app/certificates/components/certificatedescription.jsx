import styles from "@/components/componentspages/jobdescription.module.scss";

const CertificateDescription = () => {
  return (
    <section className={styles.sectionJobDescription}>
      <div className={styles.contentJobDescription}>
        <ul className={styles.listDescription}>
          <li className={styles.itemDetails}>
            <h3 className={styles.title}>Institución/Programas:</h3>
            <a
              href="https://www.theopenbootcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.descriptonList}
              style={{ width: "fit-content" }}
            >
              OpenBootcamp
            </a>
          </li>
        </ul>
        <div className={styles.detailsDescription}>
          <h3 className={styles.title}>Mi educación</h3>
          <p className={styles.descriptonDetails}>
            Mi formación no se limita a lo tradicional; cuento con más de 6 años
            de experiencia autodidacta en el mundo del diseño y 10 en Font-End.
            Esta pasión constante me ha permitido desarrollar habilidades y un
            enfoque único en mis proyectos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificateDescription;
