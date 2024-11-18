"use client";

import Image from "next/image";
import styles from "./galleryimagesia.module.scss";
import useImageIA from "@/components/hook/useImageIA";
import Preload from "@/components/utils/preloadcomponent";
import ErrorComponent from "@/components/utils/error";

const GalleryImageIa = () => {
  const { images, loading, error } = useImageIA();

  if (loading) {
    return <Preload />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const imageSrc = images?.map((image) => ({ src: image.image_url })) || [];

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.gallery}>
      {imageSrc.map((src, index) => (
        <div key={index} className={styles.item}>
          <Image
            src={src.src}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={1}
            height={1}
            onContextMenu={handleContextMenu}
          />
        </div>
      ))}
    </section>
  );
};

export default GalleryImageIa;
