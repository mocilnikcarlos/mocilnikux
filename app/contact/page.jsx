"use client";
import VideoHero from "@/components/componentspages/videohero";
import Header from "@/components/header/header";
import Speaking from "@/components/svg/speaking";
import LoadingWrapper from "@/components/utils/loadingwrapper";
import styles from "./page.module.scss";
import stylesme from "@/app/home/page.module.scss";
import Form from "@/components/form/form";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Preload from "@/components/utils/preloadcomponent";
import { getImageByName } from "@/components/utils/getImageByName";
import { useEffect, useState } from "react";
import ContactShared from "../home/components/contact";

const Contact = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImageByName("me");
      setImageUrl(url);
      setLoadingImage(false);
    };

    fetchImage();
  }, []);

  if (loadingImage) {
    return <Preload />;
  }

  return (
    <LoadingWrapper>
      <Header />
      <main>
        <section className={styles.contentHeader}>
          <VideoHero videoName="loopvideo" />
          <div className={styles.contentSvg}>
            <Speaking className={styles.svg} />
          </div>
        </section>
        <section className={styles.titleDivider}>
          <h2 className={styles.title}>Estemos en contacto</h2>
          <p className={styles.body}>¿En qué puedo ayudarte?</p>
        </section>
        <Form />
        <ContactShared />
        <section className={stylesme.me}>
          <Image
            src={imageUrl}
            alt="Me"
            width={500}
            height={500}
            className={stylesme.image}
          />
        </section>
        <Footer className={stylesme.footer}>
          3 Años como <span className={stylesme.span}>Diseñador UX/UI</span>{" "}
          apasionado por transformar ideas en soluciones que conectan con las
          necesidades reales del usuario. Me especializo en el diseño centrado
          en el usuario (UCD). Mi objetivo es siempre aportar valor y hacer que
          cada interacción sea memorable.
        </Footer>
      </main>
    </LoadingWrapper>
  );
};

export default Contact;
