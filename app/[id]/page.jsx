import { notFound } from "next/navigation";
import { getProjectId } from "@/components/utils/getProjectId";
import JukeApp from "./project/jukeapp";
import Clinia from "./project/clinia";
import Fleet from "./project/fleet";
import Tiptap from "./project/tiptap";
import LocalEyez from "./project/localeyez";
import BullMarket from "./project/bullmarket";
import Pandora from "./project/pandora";
import PlantApps from "./project/plantapps";
import Header from "@/components/header/header";
import LoadingWrapper from "@/components/utils/loadingwrapper";

export default async function ProjectPage({ params }) {
  const { id } = params;

  const projectId = await getProjectId(id);

  if (!projectId) {
    notFound();
  }

  const projectComponents = {
    jukeapp: JukeApp,
    clinia: Clinia,
    fleet: Fleet,
    tiptap: Tiptap,
    localeyez: LocalEyez,
    bullmarket: BullMarket,
    pandora: Pandora,
    plantapps: PlantApps,
  };

  const ProjectComponent = projectComponents[id];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ProjectComponent projectId={projectId} />
      </main>
    </LoadingWrapper>
  );
}
