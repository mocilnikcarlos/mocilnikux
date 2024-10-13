import style from "./gallery.module.scss";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    logo: "/jukeapp.png",
    title: "Software logístico",
    description: "Diseñado en ApproachTech",
    hoverImage: "/backjuke.png",
    link: "/",
    backgroundColor: "#F4F4F4",
    textColor: "black",
  },
  {
    logo: "/clinia.png",
    title: "Sana en casa",
    description: "Diseñado en ApproachTech",
    hoverImage: "/backclinia.png",
    link: "/",
    backgroundColor: "#F8F9FA",
    textColor: "black",
  },
  {
    logo: "/fleet.png",
    title: "Tu socio en gestión de flotas",
    description: "Diseñado en Header Solution",
    hoverImage: "/backfleet.png",
    link: "/",
    backgroundColor: "#2D81C3",
    textColor: "white",
  },
  {
    logo: "/tiptap.png",
    title: "Haz que tus hijos ganen libertad y tú control",
    description: "Diseñado en Header Solution",
    hoverImage: "/backtiptap.png",
    link: "/",
    backgroundColor: "linear-gradient(210deg, #4A3CDB, #00FFFF)",
    textColor: "white",
  },
  {
    logo: "/ciclo.png",
    title: "Tu aliado contable",
    description: "Diseñado en DispatchSSS",
    hoverImage: "/backciclo.png",
    link: "/",
    backgroundColor: "#161D31",
    textColor: "white",
  },
];

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
