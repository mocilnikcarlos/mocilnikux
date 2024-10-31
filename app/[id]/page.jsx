import { notFound } from "next/navigation";
import JukeApp from "./project/jukeapp";
import Clinia from "./project/clinia";
import Header from "@/components/header/header";

export async function generateStaticParams() {
  const projects = [
    "jukeapp",
    "tiptap",
    "clinia",
    "fleet",
    "localeyez",
    "plantapps",
    "bullmarket",
    "pandora",
  ];
  return projects.map((project) => ({ id: project }));
}

const ProjectPage = ({ params }) => {
  const { id } = params;

  const projectComponents = {
    jukeapp: JukeApp,
    clinia: Clinia,
  };

  const ProjectComponent = projectComponents[id];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ProjectComponent />
      </main>
    </>
  );
};

export default ProjectPage;
