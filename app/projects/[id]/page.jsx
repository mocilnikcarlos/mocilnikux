import JukeApp from "../projectdetails/jukeapp";

const projectsData = [
  {
    id: "jukeapp",
    title: "Juke App",
    description: "Solución logística para la gestión de envíos.",
  },
  {
    id: "clinia",
    title: "Clinia",
    description: "Aplicación para atención médica a domicilio.",
  },
  {
    id: "fleet",
    title: "Fleet Management",
    description: "Sistema para la gestión de flotas de vehículos.",
  },
  {
    id: "tiptap",
    title: "Tiptap",
    description: "Herramienta para fomentar la libertad de los niños.",
  },
  {
    id: "ciclo",
    title: "Ciclo",
    description: "Aplicación contable para empresas.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Sitio web personal para mostrar proyectos y habilidades.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Plataforma de comercio electrónico para vender productos en línea.",
  },
  {
    id: "blog",
    title: "Blog",
    description:
      "Sistema de gestión de contenido para crear y administrar publicaciones.",
  },
  {
    id: "chatapp",
    title: "Chat App",
    description:
      "Aplicación de mensajería en tiempo real para la comunicación entre usuarios.",
  },
  {
    id: "weatherapp",
    title: "Weather App",
    description: "Aplicación para consultar el clima actual y pronósticos.",
  },
];

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

const ProjectDetail = ({ params }) => {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div>
        <h1>Proyecto no encontrado</h1>
        <p>Lo sentimos, no pudimos encontrar el proyecto que buscabas.</p>
      </div>
    );
  }

  return (
    <div>
      <JukeApp />
    </div>
  );
};

export default ProjectDetail;
