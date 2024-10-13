import Image from "next/image";
import Link from "next/link";
import style from "./projectcard.module.scss";

const ProjectCard = ({
  logo,
  title,
  description,
  link,
  backgroundColor,
  hoverImage,
  textColor = "black",
}) => {
  const textClasses = {
    white: style.whiteText,
    black: style.blackText,
  };

  const textClass = textClasses[textColor] || textClasses.black;

  return (
    <div className={style.card} style={{ background: backgroundColor }}>
      <Link href={link}>
        <div className={style.content}>
          <div className={style.logoContainer}>
            <Image
              src={logo}
              alt={`${title} logo`} // Mejora la accesibilidad
              width={508}
              height={50}
              className={style.logo}
              style={{ width: "auto", height: "50px" }}
            />
            <h3 className={`${style.title} ${textClass}`}>{title}</h3>
          </div>
          <p className={`${style.description} ${textClass}`}>{description}</p>
        </div>
        <Image
          src={hoverImage}
          alt={`Hover image for ${title}`} // Mejora la accesibilidad
          width={508}
          height={508}
          className={style.hoverImage}
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
