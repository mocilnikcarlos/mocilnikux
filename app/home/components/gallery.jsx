import styles from "./gallery.module.scss";
import ImageWrapper from "./imageproject";

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.leftColumn}>
        {images.slice(0, 2).map((image, index) => (
          <ImageWrapper
            href={image.href}
            key={index}
            src={image.src}
            alt={`Imagen ${image.overlay.title} Izquierda`}
            type={image.type}
            overlayContent={image.overlay}
          />
        ))}
      </div>
      <div className={styles.rightColumn}>
        {images.slice(2).map((image, index) => (
          <ImageWrapper
            href={image.href}
            key={index + 2}
            src={image.src}
            alt={`Imagen ${image.overlay.title} Derecha`}
            type={image.type}
            overlayContent={image.overlay}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
