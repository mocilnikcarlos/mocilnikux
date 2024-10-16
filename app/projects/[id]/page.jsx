import NameProjectFail from "../projectdetails/components/nameprojectfail";
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
];

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

const ProjectDetail = ({ params }) => {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    const rawProjectName = decodeURIComponent(params.id);
    const projectName =
      rawProjectName.trim().replace(/\s+/g, " ").charAt(0).toUpperCase() +
      rawProjectName.slice(1);

    return <NameProjectFail param={projectName} />;
  }

  // Importa dinámicamente el componente del proyecto
  const ProjectComponent = require(`../projectdetails/${project.id}`).default;

  return (
    <div>
      <ProjectComponent />
    </div>
  );
};

export default ProjectDetail;
