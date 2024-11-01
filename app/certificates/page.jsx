import ImageHero from "@/components/componentspages/imagehero";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import CertificateDescription from "./components/certificatedescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import styles from "./globalcertificate.module.scss";
import LoadingWrapper from "@/components/helper/loadingwrapper";

const images = [
  { src: "/a5bab86e-e3b8-49ef-b607-83b3b4a18286.png" },
  { src: "/47a516d9-d968-4c74-826e-fc54780799bb.png" },
  { src: "/199d24e4-35a3-4760-b747-beef5517b0aa.png" },
  { src: "/0ee658b9-9295-487d-936f-31f5bcc0cfb0.png" },
  { src: "/9aa5e5b6-957f-4988-81eb-b136038eb037.png" },
  { src: "/61119f91-33c5-4361-a279-2da05a553db7.png" },
];

const Certificates = () => {
  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ImageHero backgroundImage={"/certificateshero.jpg"} />
        <CertificateDescription />
        <BodyCaseStudy images={images} />
        <Footer className={styles.textFooter}>
          ... y todavía faltan más ☝️🤓
        </Footer>
      </main>
    </LoadingWrapper>
  );
};

export default Certificates;
