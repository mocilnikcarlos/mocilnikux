import Footer from "@/components/footer/footer";
import ImageHero from "./components/imagehero";
import JobDescription from "./components/jobdescription";
import BodyCaseStudy from "./components/bodycasestudy";
import TiptapLogo from "@/components/svg/tiptap";
import styles from "./globalpages.module.scss";
import LinkWeb from "./components/linkweb";

const descriptions = ["Tiptap (NAVI)", "Rediseño UX/UI", "Figma"];

const details = {
  description: `Tiptap es un TMS logístico que gestiona paquetes de Mercado Libre y otros vendedores. También proporciona una app para que los repartidores realicen colectas y entregas.

  Rediseñé el proyecto debido a que el original presentaba incoherencia en los flujos y la UI.`,
};

const images = [
  { src: "/img tiptap 1.png" },
  { src: "/img tiptap 2.png" },
  { src: "/img tiptap 3.png" },
  { src: "/img tiptap 4.png" },
  { src: "/img tiptap 5.png" },
  { src: "/img tiptap 6.png" },
  { src: "/img tiptap 7.png" },
  { src: "/img tiptap 8.png" },
];

const TipTap = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/tiptap.png"
          LogoComponent={<TiptapLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <LinkWeb href={"/"} label={"Tiptap"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default TipTap;
