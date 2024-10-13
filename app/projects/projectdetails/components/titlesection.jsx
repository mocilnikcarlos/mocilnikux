import style from "./titlesection.module.scss";

const TitleSection = ({ title, body }) => {
  return (
    <div className={style.contenttitlesection}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{body}</p>
    </div>
  );
};

export default TitleSection;
