"use client";
import ImageHero from "@/components/componentspages/imagehero";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import CertificateDescription from "./components/certificatedescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import styles from "./globalcertificate.module.scss";
import LoadingWrapper from "@/components/utils/loadingwrapper";
import useCertificates from "@/components/hook/useCertificates";
import Preload from "@/components/utils/preloadcomponent";
import ErrorComponent from "@/components/utils/error";

const Certificates = () => {
  const { images, loading, error } = useCertificates();

  if (loading) {
    return <Preload />;
  }

  if (error) {
    return <ErrorComponent />;
  }

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
