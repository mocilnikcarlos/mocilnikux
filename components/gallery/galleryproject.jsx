// components/galleryProjects.jsx
import Link from "next/link";
import Image from "next/image";
import style from "./galleryproject.module.scss";

const GalleryProjects = ({ items }) => {
  return (
    <div className={style.galleryprojects}>
      {items.map((item) => (
        <Link href={`/proyectos/${item.id}`} key={item.id}>
          <div className={style.galleryitem}>
            <div className={style.beforehover}>
              <Image
                src={item.logo}
                alt="Logo"
                className={style.logo}
                width={item.imageWidth}
                height={50}
              />
              <h3 className={style.slogan}>{item.slogan}</h3>
              <p className={style.company}>{item.company}</p>
            </div>
            <Image
              src={item.hoverImage}
              alt="Hover"
              width={508}
              height={508}
              className={style.hoverimage}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryProjects;
