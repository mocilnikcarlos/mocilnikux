import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import FleetLogo from "@/components/svg/fleet";
import styles from "./globalpages.module.scss";
import LinkWeb from "./components/linkweb";

const descriptions = ["FleetSolutions", "Diseño UI", "Figma, Vuexy"];

const details = {
  description: `Un producto muy simple y personalizado a medida. Fui creándolo a medida que los stakeholder lo iban probándolo. Eso implicó que la idea original cambio bastante al producto final.

    Fue dividido en dos etapas. La primera constaba de la gestión, registrar cliente, vehículo y agendar una fecha para el mantenimiento. La segunda en agregar Maxtracker, un sistema que registra los kilómetros recorridos`,
};

const images = [
  { src: "/img fleet 1.png" },
  { src: "/img fleet 2.png" },
  { src: "/img fleet 3.png" },
  { src: "/img fleet 4.png" },
  { src: "/img fleet 5.png" },
  { src: "/img fleet 6.png" },
  { src: "/img fleet 7.png" },
  { src: "/img fleet 8.png" },
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
        <LinkWeb href={"/"} label={"Fleet"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default Fleet;
