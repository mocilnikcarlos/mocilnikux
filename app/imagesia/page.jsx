"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import GalleryImageIa from "./components/galleryimagesia";
import ImageHero from "@/components/componentspages/imagehero";
import IaDescription from "./components/iadescription";
import Footer from "@/components/footer/footer";
import LoadingWrapper from "@/components/utils/loadingwrapper";
import { getImageByName } from "@/components/utils/getImageByName";
import Preload from "@/components/utils/preloadcomponent";

const ImagesIa = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImageByName("heroimageia");
      setImageUrl(url);
      setLoading(false);
    };

    fetchImage();
  }, []);

  if (loading) {
    return <Preload />;
  }

  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ImageHero backgroundImage={imageUrl} />
        <IaDescription />
        <GalleryImageIa />
        <Footer />
      </main>
    </LoadingWrapper>
  );
};

export default ImagesIa;
