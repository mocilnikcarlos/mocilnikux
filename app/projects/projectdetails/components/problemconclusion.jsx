import Image from "next/image";
import style from "./problemconclusion.module.scss";

const ProblemResumeProject = ({
  imageName,
  title,
  body,
  showAnchor,
  anchorHref,
  textlink,
}) => {
  return (
    <div className={style.contentproblemresume}>
      <div className={style.contentlore}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{body}</p>

        {showAnchor && (
          <div className={style.contentanchor}>
            <a
              href={anchorHref}
              target="_blank"
              rel="noreferrer"
              className={style.anchor}
            >
              {textlink}
            </a>
          </div>
        )}
      </div>
      <Image
        src={`/${imageName}.png`}
        alt="Imagen demostrativa"
        width={331}
        height={532}
      />
    </div>
  );
};

export default ProblemResumeProject;
