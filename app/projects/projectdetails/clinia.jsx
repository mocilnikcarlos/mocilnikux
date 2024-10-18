import FlagMexico from "@/components/svg/flagmexico";
import SectionDetailsProjects from "./components/section";
import TitleSection from "./components/titlesection";
import ImageProject from "./components/imageproject";
import Image from "next/image";
import style from "./projects.module.scss";

const imageshowcouldwe = [
  { src: "/comopodriamosclinia.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosclinia-1.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosclinia-2.png", alt: "Imagen de Como podriamos" },
  { src: "/comopodriamosclinia-3.png", alt: "Imagen de Como podriamos" },
];

const imagessketch = [
  {
    src: "/bocetoclinia.png",
    alt: "Imagen Boceto",
    title: "Inicio - Resumen",
  },
  {
    src: "/bocetoclinia-2.png",
    alt: "Imagen Boceto",
    title: "Lista de citas",
  },
  {
    src: "/bocetoclinia-1.png",
    alt: "Imagen Boceto",
    title: "Detalle del paciente",
  },
];

const imageswire = [
  {
    src: "/wireframeclinia.png",
    alt: "Imagen Boceto",
    title: "Inicio - Resumen",
  },
  {
    src: "/wireframeclinia-2.png",
    alt: "Imagen Boceto",
    title: "Lista de citas",
  },
  {
    src: "/wireframeclinia-1.png",
    alt: "Imagen Boceto",
    title: "Detalle del paciente",
  },
];

const Clinia = () => {
  const problemData = [
    {
      title: "Problema",
      body: "El surgimiento del COVID-19 y el crecimiento del mercado clínico en México presentaron un desafío: la adaptación a nuevas regulaciones sobre recetas en línea. Sin una solución que integre estos sistemas, los pacientes enfrentan dificultades para acceder a atención médica. Este contexto impulsó la creación de una clínica virtual que garantiza la interoperabilidad entre los distintos sistemas, mejorando así la experiencia para todos los usuarios.",
      imageName: "problemclinia",
    },
    // Puedes agregar más objetos si es necesario
  ];

  const summaryData = [
    {
      title: "Conclusión",
      body: "A pesar de que la marca CLINIA sigue vigente y los médicos se mostraron muy satisfechos con el producto, las pruebas realizadas con algunos pacientes también indicaron un alto nivel de satisfacción en cuanto a sus necesidades. Sin embargo, el proyecto fue abandonado por falta de inversión. Existe un gran potencial para seguir mejorando e integrar las normativas gubernamentales, lo que permitiría adaptar el producto al 100% y obtener la aprobación necesaria para su regulación",
      imageName: "resumeclinia",
      showAnchor: true,
      anchorHref: "https://saas.clinia.com.mx/login",
      textlink: "Login Clinia",
    },
    // Puedes agregar más objetos si es necesario
  ];
  return (
    <SectionDetailsProjects
      design={"Diseño UX/UI"}
      date={"2023 - 2024"}
      problemData={problemData}
      summaryData={summaryData}
      svg={<FlagMexico />}
    >
      <TitleSection
        title={"User persona"}
        body={
          "Una vez identificada la necesidad del usuario, tanto medico como paciente, procedo a crear el user persona."
        }
      />

      <ImageProject imageName={"useranaclinia"} />
      <ImageProject imageName={"userluisclinia"} />

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
          src={"/identificationitemclinia.png"}
          alt="Temas identificados"
          width={584.5}
          height={262.5}
          className={style.whidthimage}
        />
      </div>

      <TitleSection
        title={"Bocetos"}
        body={
          "Me enfoqué en el usuario paciente, buscando comprender su situación de aislamiento y la ‘comodidad’ impuesta por la imposibilidad de salir de casa. Con esto en mente, diseñé un sistema que no solo optimiza la experiencia del paciente, sino que también facilita el trabajo del médico."
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
              className={style.whidthimage}
            />
          </div>
        ))}
      </div>

      <TitleSection
        title={"Interface de usuario"}
        body={
          "En cuanto a la selección de colores, no tuve la libertad de elegir, ya que la marca CLINIA y su identidad visual ya estaban establecidos. Mi papel se centró en rediseñar una plataforma que se alineara con la visión del cliente, manteniendo la coherencia con el branding existente. Mi principal contribución fue ajustar la proporción y disposición de los elementos para mejorar la usabilidad y la experiencia del usuario."
        }
      />

      <div className={style.centeritem}>
        <Image
          src={"/paletaclinia.png"}
          alt="Paleta de colores"
          width={600}
          height={707.8}
          className={style.whidthimage}
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
              className={style.whidthimagesketch}
            />
          </div>
        ))}
      </div>
    </SectionDetailsProjects>
  );
};

export default Clinia;
