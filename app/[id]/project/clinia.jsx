import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import CliniaLogo from "@/components/svg/clinia";
import styles from "./globalpages.module.scss";
import ListFooter from "./components/listfooter";
import LinkWeb from "./components/linkweb";

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

const buttonData = [
  { href: "/", label: "Prototipo 1" },
  { href: "/", label: "Prototipo 2" },
  { href: "/", label: "Prototipo 3" },
  { href: "/", label: "Prototipo 4" },
  { href: "/", label: "Prototipo 5" },
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
        <h3 className={styles.titleFooter}>Prototipos</h3>
        <ListFooter buttons={buttonData} />
        <LinkWeb href={"/"} label={"Clinia"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default Clinia;
