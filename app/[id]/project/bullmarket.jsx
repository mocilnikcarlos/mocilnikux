import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import BullMarketLogo from "@/components/svg/bullmarket";

const descriptions = [
  "BullMarket",
  "Análisis heurístico",
  "Figma, Google Sheets",
];

const details = {
  description: `Se trata de un proceso de análisis heurístico para BullMarket como parte del proceso del Bootcamp en UX/UI Open`,
};

const images = [
  { src: "/img bullmarket 1.png" },
  { src: "/img bullmarket 2.png" },
  { src: "/img bullmarket 3.png" },
  { src: "/img bullmarket 4.png" },
  { src: "/img bullmarket 5.png" },
  { src: "/img bullmarket 6.png" },
  { src: "/img bullmarket 7.png" },
  { src: "/img bullmarket 8.png" },
  { src: "/img bullmarket 9.png" },
  { src: "/img bullmarket 10.png" },
];

const BullMarket = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/bullmarket.png"
          LogoComponent={<BullMarketLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer />
    </>
  );
};

export default BullMarket;
