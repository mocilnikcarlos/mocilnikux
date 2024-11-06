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
  { src: "/imgclinia1.png" },
  { src: "/imgclinia2.png" },
  { src: "/imgclinia3.png" },
  { src: "/imgclinia4.png" },
  { src: "/imgclinia5.png" },
  { src: "/imgclinia6.png" },
  { src: "/imgclinia7.png" },
  { src: "/imgclinia8.png" },
  { src: "/imgclinia9.png" },
  { src: "/imgclinia10.png" },
  { src: "/imgclinia11.png" },
  { src: "/imgclinia12.png" },
  { src: "/imgclinia13.png" },
  { src: "/imgclinia14.png" },
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
