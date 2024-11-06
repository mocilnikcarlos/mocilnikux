import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import PlantAppsLogo from "@/components/svg/plantapps";
import styles from "./globalpages.module.scss";
import ListFooter from "@/components/componentspages/listfooter";

const descriptions = ["PlantApps", "Diseño UX/UI", "Figma, Notion, GoogleForm"];

const details = {
  description: `Una app que escanea plantas, brinda información de la misma, permite anotar tipos de cuidados y enseña como cuidarla.

    Este producto es parte del Bootcamp de UX/UI Open`,
};

const images = [
  { src: "/imgplantapps1.png" },
  { src: "/imgplantapps2.png" },
  { src: "/imgplantapps3.png" },
  { src: "/imgplantapps4.png" },
  { src: "/imgplantapps5.png" },
  { src: "/imgplantapps6.png" },
  { src: "/imgplantapps7.png" },
  { src: "/imgplantapps8.png" },
  { src: "/imgplantapps9.png" },
  { src: "/imgplantapps10.png" },
  { src: "/imgplantapps11.png" },
  { src: "/imgplantapps12.png" },
  { src: "/imgplantapps13.png" },
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
