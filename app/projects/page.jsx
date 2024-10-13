import GalleryProjects from "@/components/gallery/galleryproject";
import NavigationPage from "@/components/nav/navigationpage";
import style from "./project.module.scss";

const proyectosData = [
  {
    id: "1",
    logo: "/jukeapp.png",
    slogan: "Solución logistica",
    company: "Diseñado en ApproachTech",
    hoverImage: "/backjuke.png",
    imageWidth: 245.94,
    backgroundColor: "#F4F4F4",
    textColor: "black",
  },
  {
    id: "2",
    logo: "/clinia.png",
    slogan: "Sana en casa",
    company: "Diseñado en ApproachTech",
    hoverImage: "/backclinia.png",
    imageWidth: 140,
    backgroundColor: "#F8F9FA",
    textColor: "black",
  },
  {
    id: "3",
    logo: "/fleet.png",
    slogan: "Tu socio en gestión de flotas",
    company: "Diseñado en Header Solution",
    hoverImage: "/backfleet.png",
    imageWidth: 136,
    backgroundColor: "#2D81C3",
    textColor: "white",
  },
  {
    id: "4",
    logo: "/tiptap.png",
    slogan: "Haz que tus hijos ganen libertad y tú control",
    company: "Diseñado en Header Solution",
    hoverImage: "/backtiptap.png",
    imageWidth: 150,
    backgroundColor: "linear-gradient(45deg, #00FFFF, #4A3CDB)",
    textColor: "white",
  },
  {
    id: "5",
    logo: "/ciclo.png",
    slogan: "Tu aliado contable",
    company: "Diseñado en DispatchSSS",
    hoverImage: "/backciclo.png",
    imageWidth: 123,
    backgroundColor: "#161D31",
    textColor: "white",
  },
];

const Project = () => {
  return (
    <section className={style.contentproject}>
      <NavigationPage />
      <div className={style.gallerybox}>
        <GalleryProjects items={proyectosData} />
      </div>
    </section>
  );
};

export default Project;
