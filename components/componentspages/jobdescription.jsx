import styles from "./jobdescription.module.scss";

const JobDescription = ({ descriptions, details }) => {
  const titles = ["Cliente:", "Responsabilidad:", "Herramientas:"];

  const formattedDescription = details
    ? details.replace(/(\r\n|\n|\r)/g, "<br />")
    : "Descripción no disponible";

  return (
    <section className={styles.sectionJobDescription}>
      <div className={styles.contentJobDescription}>
        <ul className={styles.listDescription}>
          {descriptions.map((description, index) => (
            <li key={index} className={styles.itemDetails}>
              <h3 className={styles.title}>{titles[index]}</h3>
              <p className={styles.descriptonList}>{description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.detailsDescription}>
          <h3 className={styles.title}>Detalle:</h3>
          <p
            className={styles.descriptonDetails}
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
