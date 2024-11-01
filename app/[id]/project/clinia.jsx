import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import CliniaLogo from "@/components/svg/clinia";
import styles from "./globalpages.module.scss";
import LinkWeb from "@/components/componentspages/linkweb";

const descriptions = ["Clinia", "Rediseño UX/UI", "Figma"];

const details = {
  description: `Diseñe este gestor para clínicas privadas, preparado para atender las necesidades de doctores de todas las especialidades. Fue un proyecto muy enriquecedor y educativo que, aunque se detuvo por falta de financiamiento, quedó funcional. Solo requiere la aprobación del gobierno a través de un proceso burocrático para ser aceptado y utilizado.`,
};

const images = [
  { src: "/img clinia 1.png" },
  { src: "/img clinia 2.png" },
  { src: "/img clinia 3.png" },
  { src: "/img clinia 4.png" },
  { src: "/img clinia 5.png" },
  { src: "/img clinia 6.png" },
  { src: "/img clinia 7.png" },
  { src: "/img clinia 8.png" },
  { src: "/img clinia 9.png" },
  { src: "/img clinia 10.png" },
  { src: "/img clinia 11.png" },
  { src: "/img clinia 12.png" },
  { src: "/img clinia 13.png" },
  { src: "/img clinia 14.png" },
];

const Clinia = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/clinia.png"
          LogoComponent={<CliniaLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <LinkWeb href={"https://saas.clinia.com.mx/login"} label={"Clinia"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default Clinia;