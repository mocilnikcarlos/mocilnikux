"use client";
import { useEffect, useState } from "react";
import ImageHero from "@/components/componentspages/imagehero";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import LoadingWrapper from "@/components/utils/loadingwrapper";
import InterfaceDescription from "./components/interfacedescription";
import GalleryVideo from "./components/galleryvideo";
import Preload from "@/components/utils/preloadcomponent";
import { getImageByName } from "@/components/utils/getImageByName";

const ImagesIa = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImageByName("bgui");
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
        <InterfaceDescription />
        <GalleryVideo />
        <Footer />
      </main>
    </LoadingWrapper>
  );
};

export default ImagesIa;
