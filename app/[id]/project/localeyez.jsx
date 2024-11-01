import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import LocalEyezLogo from "@/components/svg/localeyez";
import styles from "./globalpages.module.scss";
import ListFooter from "./components/listfooter";

const descriptions = ["LocalEyez", "Diseño UI", "Figma"];

const details = {
  description: `Es un producto para LocalEyes, una empresa ficticia que brinda el Bootcamp de UX/UI Open como parte del estudio. Es un trabajo ficticio.`,
};

const images = [
  { src: "/img localeyez 1.png" },
  { src: "/img localeyez 2.png" },
  { src: "/img localeyez 3.png" },
  { src: "/img localeyez 4.png" },
  { src: "/img localeyez 5.png" },
  { src: "/img localeyez 6.png" },
  { src: "/img localeyez 7.png" },
  { src: "/img localeyez 8.png" },
  { src: "/img localeyez 9.png" },
  { src: "/img localeyez 10.png" },
  { src: "/img localeyez 11.png" },
  { src: "/img localeyez 12.png" },
  { src: "/img localeyez 13.png" },
  { src: "/img localeyez 14.png" },
];

const buttonData = [{ href: "/", label: "Prototipo 1" }];

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
