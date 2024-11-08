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
            alt={"Project Image"}
            type={image.type}
            overlayContent={{
              title: image.title,
              description: image.description,
            }}
          />
        ))}
      </div>
      <div className={styles.rightColumn}>
        {images.slice(2).map((image, index) => (
          <ImageWrapper
            href={image.href}
            key={index + 2}
            src={image.src}
            alt={"Project Image"}
            type={image.type}
            overlayContent={{
              title: image.title,
              description: image.description,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
