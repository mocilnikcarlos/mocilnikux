import style from "./gallery.module.scss";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

const GalleryProjects = () => {
  return (
    <div className={style.gallery}>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default GalleryProjects;
