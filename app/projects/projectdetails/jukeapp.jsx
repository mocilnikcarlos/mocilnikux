import FlagArgentine from "@/components/svg/flagargentine";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import ImageProject from "./components/imageproject";
import style from "./jukeapp.module.scss";
import Image from "next/image";

const imageshowcouldwe = [
  { src: "/comopodriamosjuke.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosjuke-1.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosjuke-2.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosjuke-3.png", alt: "Imagen de Como podriamos" },
];

const imagessketch = [
  {
    src: "/bocetojuke.png",
    alt: "Imagen Boceto",
    title: "Lista de paquetes",
  },
  {
    src: "/bocetojuke-2.png",
    alt: "Imagen Boceto",
    title: "Lista de rutas",
  },
  {
    src: "/bocetojuke-1.png",
    alt: "Imagen Boceto",
    title: "Detalle de la ruta",
  },
];

const imageswire = [
  {
    src: "/wireframejuke.png",
    alt: "Imagen Wireframe",
    title: "Lista de paquetes",
  },
  {
    src: "/wireframejuke-2.png",
    alt: "Imagen Wireframe",
    title: "Lista de rutas",
  },
  {
    src: "/wireframejuke-1.png",
    alt: "Imagen Wireframe",
    title: "Detalle de la ruta",
  },
];

const Jukeapp = () => {
  const problemData = [
    {
      title: "Problema",
      body: "A las logísticas les cuesta mantener el orden de los paquetes y darle seguimiento a cada una de las rutas. Es un ambiente que manipula mucha cantidad de información y a veces no logran cumplir con los objetivos perjudicando a los vendedores y compradores.",
      imageName: "problemjuke",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Resumen",
      body: "Aún hay mucho por mejorar; este MVP es muy completo y abarca las necesidades de los actores involucrados. Sin embargo, para llegar a una conclusión más precisa, es necesario presentar este producto a usuarios reales. Aunque se mostró un gran interés, no se pudo lanzar al mercado por falta de inversión.",
      imageName: "resumejuke",
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

      <h2 className={style.title}>¿Como podríamos?</h2>

      <div className={style.gallery}>
        {imageshowcouldwe.map((image, index) => (
          <div key={index} className={style.imagecontainer}>
            <Image src={image.src} alt={image.alt} width={300} height={250} />
          </div>
        ))}
      </div>

      <div className={style.centeritem}>
        <Image
          src={"/identificationitemjukeapp.png"}
          alt="Temas identificados"
          width={689}
          height={766.31}
        />
      </div>

      <TitleSection
        title={"Flujos y bocetos"}
        body={
          "Una vez identificado los objetivos, es momento de plasmar la solución en flujos y bocetos"
        }
      />

      <div className={style.sketch}>
        <Image src={"/flujojuke.png"} alt="Flow" width={508} height={249} />
        <Image
          src={"/flujojuke-1.png"}
          alt="Flow"
          width={508}
          height={437.93}
        />
      </div>

      <Image
        src={"/navjuke.png"}
        alt="Estructura de la información"
        width={1040}
        height={502.73}
      />

      <div className={style.gallerysketch}>
        {imagessketch.map((image, index) => (
          <div key={index} className={style.imagecontainersketch}>
            <h2 className={style.titlesketch}>{image.title}</h2>
            <Image
              src={image.src}
              alt={image.alt}
              width={331}
              height={0}
              layout="responsive"
            />
          </div>
        ))}
      </div>

      <TitleSection
        title={"Interface de usuario"}
        body={
          "Decidí optar por un diseño claro, utilizando una paleta de blancos y grises. Además, elegí el color azul como tono principal para representar seguridad, estabilidad y confianza."
        }
      />

      <div className={style.centeritem}>
        <Image
          src={"/paletajuke.png"}
          alt="Paleta de colores"
          width={600}
          height={650}
        />
      </div>

      <div className={style.gallerysketch}>
        {imageswire.map((image, index) => (
          <div key={index} className={style.imagecontainersketch}>
            <h2 className={style.titlesketch}>{image.title}</h2>
            <Image
              src={image.src}
              alt={image.alt}
              width={331}
              height={0}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </SectionDetailsProjects>
  );
};

export default Jukeapp;
