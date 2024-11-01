import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import PandoraLogo from "@/components/svg/pandora";

const descriptions = [
  "Pandora",
  "Arquitectura de la información",
  "Figma, Optimal Workshop",
];

const details = {
  description: `Se trata de un análisis de usabilidad de la web de Pandora para crear una nueva arquitectura de la información. Este proyecto pertenece al Bootcamp de UX/UI Open.`,
};

const images = [
  { src: "/img pandora 1.png" },
  { src: "/img pandora 2.png" },
  { src: "/img pandora 3.png" },
  { src: "/img pandora 4.png" },
  { src: "/img pandora 5.png" },
  { src: "/img pandora 6.png" },
];

const Pandora = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/Pandora.png"
          LogoComponent={<PandoraLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer />
    </>
  );
};

export default Pandora;
