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
  { src: "/imgbullmarket1.png" },
  { src: "/imgbullmarket2.png" },
  { src: "/imgbullmarket3.png" },
  { src: "/imgbullmarket4.png" },
  { src: "/imgbullmarket5.png" },
  { src: "/imgbullmarket6.png" },
  { src: "/imgbullmarket7.png" },
  { src: "/imgbullmarket8.png" },
  { src: "/imgbullmarket9.png" },
  { src: "/imgbullmarket10.png" },
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
