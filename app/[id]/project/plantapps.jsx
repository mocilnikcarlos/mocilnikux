import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import PlantAppsLogo from "@/components/svg/plantapps";
import styles from "./globalpages.module.scss";
import ListFooter from "./components/listfooter";

const descriptions = ["PlantApps", "Diseño UX/UI", "Figma, Notion, GoogleForm"];

const details = {
  description: `Una app que escanea plantas, brinda información de la misma, permite anotar tipos de cuidados y enseña como cuidarla.

    Este producto es parte del Bootcamp de UX/UI Open`,
};

const images = [
  { src: "/img plantapps 1.png" },
  { src: "/img plantapps 2.png" },
  { src: "/img plantapps 3.png" },
  { src: "/img plantapps 4.png" },
  { src: "/img plantapps 5.png" },
  { src: "/img plantapps 6.png" },
  { src: "/img plantapps 7.png" },
  { src: "/img plantapps 8.png" },
  { src: "/img plantapps 9.png" },
  { src: "/img plantapps 10.png" },
  { src: "/img plantapps 11.png" },
  { src: "/img plantapps 12.png" },
  { src: "/img plantapps 13.png" },
];

const buttonData = [
  {
    href: "https://www.figma.com/proto/cwmMTUcCQmtz5RCO4O55nk/Bootcamp-UX-UI-Open?node-id=593-2942&node-type=frame&viewport=81%2C268%2C0.1&t=Z3IZgPaFStojfEro-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=593%3A2942",
    label: "PlantApps",
  },
];

const PlantApps = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/plantapps.png"
          LogoComponent={<PlantAppsLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <h3 className={styles.titleFooter}>Prototipos</h3>
        <ListFooter buttons={buttonData} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default PlantApps;
