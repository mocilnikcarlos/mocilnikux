import FlagArgentine from "@/components/svg/flagargentine";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import ImageProject from "./components/imageproject";
import Image from "next/image";
import style from "./projects.module.scss";

const imageshowcouldwe = [
  { src: "/comopodriamosciclo.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosciclo-1.png", alt: "Imagen de Como podriamos" },
];

const imagessketch = [
  {
    src: "/bocetociclo.png",
    alt: "Imagen Boceto",
    title: "Estado de cuenta",
  },
  {
    src: "/bocetociclo-2.png",
    alt: "Imagen Boceto",
    title: "Facturas generadas",
  },
  {
    src: "/bocetociclo-1.png",
    alt: "Imagen Boceto",
    title: "Facturación",
  },
];

const imageswire = [
  {
    src: "/wireframeciclo.png",
    alt: "Imagen Boceto",
    title: "Estado de cuenta",
  },
  {
    src: "/wireframeciclo-2.png",
    alt: "Imagen Boceto",
    title: "Facturas generadas",
  },
  {
    src: "/wireframeciclo-1.png",
    alt: "Imagen Boceto",
    title: "Facturación",
  },
];

const Ciclo = () => {
  const problemData = [
    {
      title: "Problema",
      body: "Muchos trabajadores autónomos y pequeños emprendedores enfrentan dificultades al gestionar sus obligaciones fiscales, especialmente el monotributo. La falta de herramientas accesibles y eficientes para llevar un control adecuado de sus ingresos y pagos genera confusión, retrasos y, en ocasiones, sanciones",
      imageName: "problemciclo",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Conclusión",
      body: "En resumen, aunque el desarrollo de la plataforma estaba bien encaminado y se ajustaba a las necesidades de los usuarios, el avance del proyecto se detuvo debido a la reciente legislación del estado argentino, que prohíbe a plataformas externas a la AFIP realizar facturas o gestionar el monotributo. Esta circunstancia resalta la importancia de adaptarse a un entorno regulatorio cambiante, lo que plantea nuevos desafíos y oportunidades para el futuro del proyecto",
      imageName: "resumeciclo",
      showAnchor: false,
    },
    // Puedes agregar más objetos si es necesario
  ];

  return (
    <SectionDetailsProjects
      design={"Diseño UX/UI"}
      date={"2022"}
      problemData={problemData}
      summaryData={summaryData}
      svg={<FlagArgentine />}
    >
      <TitleSection
        title={"User persona"}
        body={
          "No todos cuentan con conocimientos contables. Por eso, mi enfoque principal está dirigido a aquellos usuarios que tienen poca o ninguna experiencia en este ámbito"
        }
      />

      <ImageProject imageName={"usermariaciclo"} />

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
          src={"/identificationitemciclo.png"}
          alt="Temas identificados"
          width={689}
          height={331.2}
        />
      </div>

      <TitleSection
        title={"Bocetos"}
        body={
          "Con el perfil del usuario claro, es momento de traducir sus necesidades en diseños simples y ágiles"
        }
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
          "La interfaz está diseñada para explicar cada aspecto de manera visual y detallada, utilizando un lenguaje claro y accesible. Esto permite que el usuario se familiarice fácilmente con la plataforma, ya que contará con guías en cada etapa del proceso"
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
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </SectionDetailsProjects>
  );
};

export default Ciclo;
