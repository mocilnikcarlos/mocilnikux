import GalleryProjects from "@/components/gallery/galleryproject";
import NavigationPage from "@/components/nav/navigationpage";

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
];

const Proyectos = () => {
  return (
    <div>
      <NavigationPage />
      <GalleryProjects items={proyectosData} />
    </div>
  );
};

export default Proyectos;
