import GalleryProjects from "@/components/gallery/galleryproject";

const proyectosData = [
  {
    id: "1",
    logo: "/jukeapp.png",
    slogan: "Solución logistica",
    company: "Diseñado en ApproachTech",
    hoverImage: "/backjuke.png",
    imageWidth: 245.94, // Ajusta según sea necesario
    hoverImageWidth: 200, // Ajusta según sea necesario
  },
];

const Proyectos = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      <GalleryProjects items={proyectosData} />
    </div>
  );
};

export default Proyectos;
