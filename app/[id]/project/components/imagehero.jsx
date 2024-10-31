import styles from "./imagehero.module.scss";

const ImageHero = ({ backgroundImage, LogoComponent }) => {
  return (
    <section
      className={styles.imageHero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.contentLogo}>{LogoComponent}</div>
    </section>
  );
};

export default ImageHero;
