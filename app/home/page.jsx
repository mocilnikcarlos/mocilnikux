import Gallery from "./components/gallery";
import style from "./page.module.scss";

const images1 = [
  {
    src: "/jukeapp.png",
    type: "large",
    overlay: { title: "ux/ui", description: "JukeApp" },
  },
  {
    src: "/tiptap.png",
    type: "small",
    overlay: { title: "ui", description: "Garantía de pago" },
  },
  {
    src: "/clinia.png",
    type: "small",
    overlay: { title: "ux/ui", description: "Clinia" },
  },
  {
    src: "/fleet.png",
    type: "large",
    overlay: { title: "ui", description: "FleetSolutions" },
  },
];

const images2 = [
  {
    src: "/localeyez.png",
    type: "large",
    overlay: { title: "ui - Proyecto Bootcamp", description: "LocalEyez" },
  },
  {
    src: "/plantapps.png",
    type: "small",
    overlay: {
      title: "ux/ui - Proyecto Bootcamp",
      description: "PlantApps",
    },
  },
  {
    src: "/bullmarket.png",
    type: "small",
    overlay: {
      title: "análisis heurístico - Proyecto Bootcamp",
      description: "BullMarket",
    },
  },
  {
    src: "/pandora.png",
    type: "large",
    overlay: { title: "ux - Proyecto Bootcamp", description: "Pandora" },
  },
];

const Portfolio = () => {
  return (
    <section className={style.portfoliosection}>
      <Gallery images={images1} />
      <Gallery images={images2} />
    </section>
  );
};

export default Portfolio;
