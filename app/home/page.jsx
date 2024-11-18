"use client";
import { useState, useEffect } from "react";
import useProjects from "@/components/hook/useProjects";
import Image from "next/image";
import Gallery from "./components/gallery";
import styles from "./page.module.scss";
import Contact from "./components/contact";
import Footer from "@/components/footer/footer";
import Preload from "@/components/utils/preloadcomponent";
import { getImageByName } from "@/components/utils/getImageByName";

const Portfolio = () => {
  const { projects, loading: loadingProject, error } = useProjects();

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

  if (loadingProject || loadingImage) {
    return <Preload />;
  }

  if (error) return <div>Error: {error}</div>;

  const firstGalleryImages = projects.slice(0, 4);
  const secondGalleryImages = projects.slice(4);

  return (
    <>
      <article className={styles.portfolioarticle}>
        <section className={styles.portfoliosection}>
          <Gallery images={firstGalleryImages} />
          <Gallery images={secondGalleryImages} />
        </section>
        <Contact />
        <section className={styles.me}>
          <Image
            src={imageUrl}
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
