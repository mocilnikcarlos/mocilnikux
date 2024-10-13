import FlagArgentine from "@/components/svg/flagargentine";
import DetailsMyJob from "./detailsmyjob";
import NavigationsDetailsProjects from "./navigationsdetailsprojects";
import style from "./section.module.scss";

const SectionDetailsProjects = () => {
  return (
    <section className={style.section}>
      <div className={style.contentsection}>
        <NavigationsDetailsProjects />
        <DetailsMyJob
          design={"Diseño UX/UI - Product Designer"}
          date={"2023-2024"}
          svg={<FlagArgentine />}
        />
      </div>
    </section>
  );
};

export default SectionDetailsProjects;
