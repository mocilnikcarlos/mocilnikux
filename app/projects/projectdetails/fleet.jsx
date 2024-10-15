import FlagArgentine from "@/components/svg/flagargentine";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import Image from "next/image";
import ImageProject from "./components/imageproject";
import style from "./projects.module.scss";

const FleetSolutions = () => {
  const problemData = [
    {
      title: "Problema",
      body: "El equipo de mecánicos utilizaba hojas de cálculo para gestionar la información de los vehículos, pero se encontraban con dificultades para mantener un control efectivo sobre los intervalos de mantenimiento. A pesar de registrar todos los datos, les resultaba complicado informar a sus clientes sobre cuándo debían llevar sus vehículos al taller, lo que generaba confusiones y posibles retrasos en los mantenimientos necesarios",
      imageName: "problemfleet",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Conclusión",
      body: "El producto ya está disponible en el mercado. Mi participación se dividió en dos fases: la primera fue en la fase inicial del desarrollo y la segunda en la integración del sistema de rastreo de kilómetros recorridos. Se trata de una herramienta prometedora que, con más tiempo, podría incorporar funciones adicionales y fomentar una interacción más directa con los clientes de Fleet Solutions",
      imageName: "resumefleet",
      showAnchor: true,
      anchorHref: "https://fleetsolutions.com.ar/",
      textlink: "Web pública",
    },
    // Puedes agregar más objetos si es necesario
  ];

  return (
    <SectionDetailsProjects
      design={"Diseño UI"}
      date={"2023"}
      problemData={problemData}
      summaryData={summaryData}
      svg={<FlagArgentine />}
    >
      <TitleSection
        title={"Sprint e historia de usuario"}
        body={
          "Tras definir el sprint, llegó el momento de recopilar toda la información proporcionada por el CEO y desarrollar dos historias de usuario que representaran a los distintos perfiles: los mecánicos que utilizarán la herramienta en el taller y los holdings, que son sus clientes"
        }
      />

      <div className={style.centeritem}>
        <Image
          src={"/userstoryfleet.png"}
          alt="Sprint"
          width={1040}
          height={485.33}
          className={style.whidthimage}
        />
      </div>

      <TitleSection
        title={"User persona"}
        body={
          "Una vez conocida la necesidad de los distintos actores, creo un user persona que será mi guía"
        }
      />

      <ImageProject imageName={"useradminfleet"} />

      <TitleSection
        title={"Bocetos y flujo de usuario"}
        body={
          "Con el perfil del usuario claro, es momento de traducir sus necesidades en diseños simples y ágiles"
        }
      />

      <ImageProject imageName={"flujofleet"} />

      <ImageProject imageName={"bocetofleet"} />

      <TitleSection
        title={"Interface de usuario"}
        body={
          "Debido a las limitaciones de tiempo, utilicé el UI Kit de Vue para acelerar el desarrollo. La identidad de la marca fue diseñada por un diseñador gráfico, mientras que mi enfoque se centró exclusivamente en la experiencia y la interfaz de usuario"
        }
      />

      <ImageProject imageName={"wireframefleet"} />
    </SectionDetailsProjects>
  );
};

export default FleetSolutions;
