import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import LocalEyezLogo from "@/components/svg/localeyez";
import styles from "./globalpages.module.scss";
import ListFooter from "@/components/componentspages/listfooter";

const descriptions = ["LocalEyez", "Diseño UI", "Figma"];

const details = {
  description: `Es un producto para LocalEyes, una empresa ficticia que brinda el Bootcamp de UX/UI Open como parte del estudio. Es un trabajo ficticio.`,
};

const images = [
  { src: "/imglocaleyez1.png" },
  { src: "/imglocaleyez2.png" },
  { src: "/imglocaleyez3.png" },
  { src: "/imglocaleyez4.png" },
  { src: "/imglocaleyez5.png" },
  { src: "/imglocaleyez6.png" },
  { src: "/imglocaleyez7.png" },
  { src: "/imglocaleyez8.png" },
  { src: "/imglocaleyez9.png" },
  { src: "/imglocaleyez10.png" },
  { src: "/imglocaleyez11.png" },
  { src: "/imglocaleyez12.png" },
  { src: "/imglocaleyez13.png" },
  { src: "/imglocaleyez14.png" },
];

const buttonData = [
  {
    href: "https://www.figma.com/proto/cwmMTUcCQmtz5RCO4O55nk/Bootcamp-UX-UI-Open?node-id=695-3610&node-type=frame&viewport=555%2C216%2C0.1&t=Z3IZgPaFStojfEro-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=695%3A3610",
    label: "Onboarding",
  },
];

const LocalEyez = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/localeyez.png"
          LogoComponent={<LocalEyezLogo />}
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

export default LocalEyez;
