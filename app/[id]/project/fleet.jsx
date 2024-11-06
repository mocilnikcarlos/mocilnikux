import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import FleetLogo from "@/components/svg/fleet";
import styles from "./globalpages.module.scss";
import LinkWeb from "@/components/componentspages/linkweb";

const descriptions = ["FleetSolutions", "Diseño UI", "Figma, Vuexy"];

const details = {
  description: `Un producto muy simple y personalizado a medida. Fui creándolo a medida que los stakeholder lo iban probándolo. Eso implicó que la idea original cambio bastante al producto final.

    Fue dividido en dos etapas. La primera constaba de la gestión, registrar cliente, vehículo y agendar una fecha para el mantenimiento. La segunda en agregar Maxtracker, un sistema que registra los kilómetros recorridos`,
};

const images = [
  { src: "/imgfleet1.png" },
  { src: "/imgfleet2.png" },
  { src: "/imgfleet3.png" },
  { src: "/imgfleet4.png" },
  { src: "/imgfleet5.png" },
  { src: "/imgfleet6.png" },
  { src: "/imgfleet7.png" },
  { src: "/imgfleet8.png" },
];

const Fleet = () => {
  return (
    <>
      <article>
        <ImageHero backgroundImage="/fleet.png" LogoComponent={<FleetLogo />} />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <LinkWeb href={"https://fleetsolutions.com.ar/"} label={"Fleet"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default Fleet;
