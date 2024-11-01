import styles from "@/components/componentspages/jobdescription.module.scss";

const IaDescription = () => {
  return (
    <section className={styles.sectionJobDescription}>
      <div className={styles.contentJobDescription}>
        <ul className={styles.listDescription}>
          <li className={styles.itemDetails}>
            <h3 className={styles.title}>Herramientas:</h3>
            <p className={styles.descriptonList}>Leonardo.ia</p>
          </li>
          <li className={styles.itemDetails}>
            <h3 className={styles.title}>Perfil:</h3>
            <a
              href="https://stock.adobe.com/es/contributor/211389143/CarlosAlberto"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.descriptonList}
              style={{ width: "fit-content" }}
            >
              AdobeStock
            </a>
          </li>
        </ul>
        <div className={styles.detailsDescription}>
          <h3 className={styles.title}>Imágenes con ia</h3>
          <p className={styles.descriptonDetails}>
            Exploro la creación de imágenes generadas por inteligencia
            artificial como parte de mis experimentaciones creativas. Aunque a
            veces las incorporo en proyectos específicos, la mayoría son fruto
            de mi pasión por el arte digital. Algunas de estas piezas están
            disponibles en Adobe Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default IaDescription;
