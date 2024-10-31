import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import JukeAppLogo from "@/components/svg/jukeapp";
import styles from "./globalpages.module.scss";
import ListFooter from "./components/listfooter";
import LinkWeb from "./components/linkweb";

const descriptions = ["JukeApp (NAVI)", "Rediseño UX/UI", "Figma"];

const details = {
  description: `JukeApp es un TMS logístico que gestiona paquetes de Mercado Libre y otros vendedores. También proporciona una app para que los repartidores realicen colectas y entregas.

  Rediseñé el proyecto debido a que el original presentaba incoherencia en los flujos y la UI.`,
};

const images = [
  { src: "/img jukeapp 1.png" },
  { src: "/img jukeapp 2.png" },
  { src: "/img jukeapp 3.png" },
  { src: "/img jukeapp 4.png" },
  { src: "/img jukeapp 5.png" },
  { src: "/img jukeapp 6.png" },
  { src: "/img jukeapp 7.png" },
  { src: "/img jukeapp 8.png" },
  { src: "/img jukeapp 9.png" },
  { src: "/img jukeapp 10.png" },
  { src: "/img jukeapp 11.png" },
  { src: "/img jukeapp 12.png" },
  { src: "/img jukeapp 13.png" },
];

const buttonData = [
  { href: "/", label: "Prototipo 1" },
  { href: "/", label: "Prototipo 2" },
  { href: "/", label: "Prototipo 3" },
  { href: "/", label: "Prototipo 4" },
  { href: "/", label: "Prototipo 5" },
];

const JukeApp = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/jukeapp.png"
          LogoComponent={<JukeAppLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <h3 className={styles.titleFooter}>Prototipos</h3>
        <ListFooter buttons={buttonData} />
        <LinkWeb href={"/"} label={"JukeApp"} />
      </Footer>
    </>
  );
};

export default JukeApp;
