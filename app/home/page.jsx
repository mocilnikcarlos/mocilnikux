import Image from "next/image";
import Gallery from "./components/gallery";
import styles from "./page.module.scss";
import Contact from "./components/contact";
import Footer from "@/components/footer/footer";

const images1 = [
  {
    href: "/jukeapp",
    src: "/jukeapp.png",
    type: "large",
    overlay: { title: "ux/ui", description: "JukeApp" },
  },
  {
    href: "/tiptap",
    src: "/tiptap.png",
    type: "small",
    overlay: { title: "ui", description: "Garantía de pago" },
  },
  {
    href: "/clinia",
    src: "/clinia.png",
    type: "small",
    overlay: { title: "ux/ui", description: "Clinia" },
  },
  {
    href: "/fleet",
    src: "/fleet.png",
    type: "large",
    overlay: { title: "ui", description: "FleetSolutions" },
  },
];

const images2 = [
  {
    href: "/localeyez",
    src: "/localeyez.png",
    type: "large",
    overlay: { title: "ui - Proyecto Bootcamp", description: "LocalEyez" },
  },
  {
    href: "/plantapps",
    src: "/plantapps.png",
    type: "small",
    overlay: {
      title: "ux/ui - Proyecto Bootcamp",
      description: "PlantApps",
    },
  },
  {
    href: "/bullmarket",
    src: "/bullmarket.png",
    type: "small",
    overlay: {
      title: "análisis heurístico - Proyecto Bootcamp",
      description: "BullMarket",
    },
  },
  {
    href: "/pandora",
    src: "/pandora.png",
    type: "large",
    overlay: { title: "ux - Proyecto Bootcamp", description: "Pandora" },
  },
];

const Portfolio = () => {
  return (
    <>
      <article className={styles.portfolioarticle}>
        <section className={styles.portfoliosection}>
          <Gallery images={images1} />
          <Gallery images={images2} />
        </section>
        <Contact />
        <section className={styles.me}>
          <Image
            src={"/me.png"}
            alt="Me"
            width={500}
            height={500}
            className={styles.image}
          />
        </section>
      </article>
      <Footer className={styles.footer}>
        3 Años como <span className={styles.span}>Diseñador UX/UI</span>{" "}
        apasionado por transformar ideas en soluciones que conectan con las
        necesidades reales del usuario. Me especializo en el diseño centrado en
        el usuario (UCD). Mi objetivo es siempre aportar valor y hacer que cada
        interacción sea memorable.
      </Footer>
    </>
  );
};

export default Portfolio;
