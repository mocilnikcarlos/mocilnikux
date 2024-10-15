import FlagPanama from "@/components/svg/flagpanama";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import ImageProject from "./components/imageproject";
import Image from "next/image";
import style from "./projects.module.scss";

const imagessketch = [
  {
    src: "/bocetotiptap.png",
    alt: "Imagen Boceto",
    title: "Resumen",
  },
  {
    src: "/bocetotiptap-2.png",
    alt: "Imagen Boceto",
    title: "Lista de alumnos",
  },
  {
    src: "/bocetotiptap-1.png",
    alt: "Imagen Boceto",
    title: "Cobros",
  },
];

const imageswire = [
  {
    src: "/wireframetiptap.png",
    alt: "Imagen Boceto",
    title: "Resumen",
  },
  {
    src: "/wireframetiptap-2.png",
    alt: "Imagen Boceto",
    title: "Lista de alumnos",
  },
  {
    src: "/wireframetiptap-1.png",
    alt: "Imagen Boceto",
    title: "Cobros",
  },
];

const Tiptap = () => {
  const problemData = [
    {
      title: "Problema",
      body: "Garantía de pago, surge como un microservicio de TipTap en respuesta a un problema común en las instituciones educativas: la dificultad en la gestión de pagos y seguimiento de deudas de los alumnos. Enfrentaban un reto en la administración de cobros, lo que generaba confusión y frustración tanto para las familias como para el personal administrativo.",
      imageName: "problemtiptap",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Conclusión",
      body: "“Garantía de Pago” ya está disponible en el mercado y está siendo utilizado por instituciones educativas. Fui subcontratado para desarrollar las pantallas del producto. Aunque no tengo acceso directo a feedback de usuarios reales, el diseño se realizó con un enfoque escalable, lo que sugiere un gran potencial para crecer y adaptarse a las necesidades futuras",
      imageName: "resumetiptap",
      showAnchor: true,
      anchorHref: "https://dev-school.paytiptap.com/",
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
      svg={<FlagPanama />}
    >
      <TitleSection
        title={"Bocetos y definición de sprint (mutable)"}
        body={
          "El microservicio de “Garantía de Pago” de TipTap optimiza la gestión de cobros en colegios. Mi tarea fue diseñar la interfaz de usuario (UI), mejorando la experiencia existente. Me enfoqué en crear una UI intuitiva que facilite la navegación para los administradores"
        }
      />

      <ImageProject imageName={"sprinttiptap"} />

      <div className={style.gallerysketch}>
        {imagessketch.map((image, index) => (
          <div key={index} className={style.imagecontainersketch}>
            <h2 className={style.titlesketch}>{image.title}</h2>
            <Image
              src={image.src}
              alt={image.alt}
              width={331}
              height={0}
              className={style.whidthimagesketch}
            />
          </div>
        ))}
      </div>

      <TitleSection
        title={"Interface de usuario"}
        body={
          "Debido a las limitaciones de tiempo, utilicé el UI Kit de Material Design para acelerar el desarrollo. La identidad de la marca fue diseñada por un diseñador gráfico, mientras que mi enfoque se centró exclusivamente en la experiencia y la interfaz de usuario"
        }
      />

      <div className={style.gallerysketch}>
        {imageswire.map((image, index) => (
          <div key={index} className={style.imagecontainersketch}>
            <h2 className={style.titlesketch}>{image.title}</h2>
            <Image
              src={image.src}
              alt={image.alt}
              width={331}
              height={0}
              className={style.whidthimagesketch}
            />
          </div>
        ))}
      </div>
    </SectionDetailsProjects>
  );
};

export default Tiptap;
