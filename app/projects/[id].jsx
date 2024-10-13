// pages/proyectos/[id].jsx
import Image from "next/image";

const proyectosData = [
  {
    id: "1",
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/path/to/image1.jpg",
  },
  {
    id: "2",
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/path/to/image2.jpg",
  },
  // Agrega más proyectos según sea necesario
];

export async function getStaticPaths() {
  const paths = proyectosData.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = proyectosData.find((p) => p.id === params.id);
  return { props: { project } };
}

const ProyectoDetail = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={500} // Ajusta el ancho según necesites
        height={300} // Ajusta la altura según necesites
      />
      <p>{project.description}</p>
    </div>
  );
};

export default ProyectoDetail;
