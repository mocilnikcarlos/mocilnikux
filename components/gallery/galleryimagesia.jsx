import Image from "next/image";
import style from "./galleryimagesia.module.scss";

const GalleryImagesIa = ({ items }) => {
  return (
    <div className={style.galleryimageia}>
      {items.map((item) => (
        <Image
          src={item.image}
          key={item.id}
          alt="Image"
          width={242}
          height={242}
          className={style.image}
        />
      ))}
    </div>
  );
};

export default GalleryImagesIa;
