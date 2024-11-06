import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import TiptapLogo from "@/components/svg/tiptap";
import styles from "./globalpages.module.scss";
import LinkWeb from "@/components/componentspages/linkweb";

const descriptions = ["Tiptap", "Diseño UI", "Figma, Vuexy"];

const details = {
  description: `El producto es completamente personalizado, desarrollado en etapas y perfeccionado a través de múltiples reuniones. No se trata de un producto convencional; fui convocado principalmente para diseñar una interfaz de usuario dentro del ecosistema de Tiptap y proporcionar una herramienta de gestión para los colegios que son clientes de Tiptap.`,
};

const images = [
  { src: "/imgtiptap1.png" },
  { src: "/imgtiptap2.png" },
  { src: "/imgtiptap3.png" },
  { src: "/imgtiptap4.png" },
  { src: "/imgtiptap5.png" },
  { src: "/imgtiptap6.png" },
  { src: "/imgtiptap7.png" },
  { src: "/imgtiptap8.png" },
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
        <LinkWeb href={"https://dev-school.paytiptap.com/"} label={"Tiptap"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default TipTap;
