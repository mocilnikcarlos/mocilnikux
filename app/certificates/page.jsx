"use client";
import { useState, useEffect } from "react"; // Asegúrate de importar estos hooks
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
import { getImageByName } from "@/components/utils/getImageByName";

const Certificates = () => {
  const { images, loading: loadingCertificates, error } = useCertificates();

  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImageByName("certificateshero");
      setImageUrl(url);
      setLoadingImage(false);
    };

    fetchImage();
  }, []);

  if (loadingCertificates || loadingImage) {
    return <Preload />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ImageHero backgroundImage={imageUrl} />
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
