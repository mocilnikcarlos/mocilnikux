import DetailsMyJob from "./detailsmyjob";
import NavigationsDetailsProjects from "./navigationsdetailsprojects";
import style from "./section.module.scss";
import ProblemResumeProject from "./problemconclusion";

const SectionDetailsProjects = ({
  design,
  date,
  problemData = [], // Valor predeterminado como array vacío
  summaryData = [], // Valor predeterminado como array vacío
  svg,
  children,
}) => {
  return (
    <section className={style.section}>
      <div className={style.contentsection}>
        <NavigationsDetailsProjects />
        <DetailsMyJob design={design} date={date} svg={svg} />

        {/* Mapeo para el problema */}
        {problemData.map((item, index) => (
          <ProblemResumeProject
            key={`problem-${index}`}
            title={item.title}
            body={item.body}
            imageName={item.imageName}
          />
        ))}

        <div className={style.contentchildren}>{children}</div>

        {/* Mapeo para el resumen */}
        {summaryData.map((item, index) => (
          <ProblemResumeProject
            key={`summary-${index}`}
            title={item.title}
            body={item.body}
            imageName={item.imageName}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionDetailsProjects;
