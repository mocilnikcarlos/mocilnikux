import Image from "next/image";
import styles from "./imageproject.module.scss";
import Link from "next/link";

const ImageWrapper = ({ href, src, alt, type, overlayContent }) => {
  return (
    <Link href={href}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          className={`${type === "large" ? styles.large : styles.small} ${
            styles.image
          }`}
          width={720}
          height={type === "large" ? 720 : 360}
          layout="responsive"
        />
        {overlayContent && (
          <div className={styles.overlay}>
            <div className={styles.boxText}>
              {overlayContent.title && (
                <p className={styles.responsibility}>{overlayContent.title}</p>
              )}
              {overlayContent.description && (
                <span className={styles.project}>
                  {overlayContent.description}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ImageWrapper;
