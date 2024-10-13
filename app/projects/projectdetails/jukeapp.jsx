import FlagArgentine from "@/components/svg/flagargentine";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import ImageProject from "./components/imageproject";

const Jukeapp = () => {
  const problemData = [
    {
      title: "Problema",
      body: "Textos sobre el problema.",
      imageName: "problemjuke",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Resumen",
      body: "Textos sobre el resumen.",
      imageName: "problemjuke",
    },
    // Puedes agregar más objetos si es necesario
  ];

  return (
    <SectionDetailsProjects
      design="Diseño UX/UI - Product Designer"
      date="2023-2024"
      problemData={problemData}
      summaryData={summaryData}
      svg={<FlagArgentine />}
    >
      <TitleSection
        title={"User persona"}
        body={
          "El éxito del vendedor y del comprador es fundamental para impulsar la logística. Asi que identificados los problemas, me centro en los tipos de usuarios"
        }
      />
      <ImageProject imageName={"userlaurajukeapp"} />
      <ImageProject imageName={"usermartinjukeapp"} />
    </SectionDetailsProjects>
  );
};

export default Jukeapp;
