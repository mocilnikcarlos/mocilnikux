import Header from "@/components/header/header";
import GalleryImageIa from "./components/galleryimagesia";
import ImageHero from "@/components/componentspages/imagehero";
import IaDescription from "./components/iadescription";
import Footer from "@/components/footer/footer";
import LoadingWrapper from "@/components/utils/loadingwrapper";

const ImagesIa = () => {
  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ImageHero backgroundImage={"/heroimageia.jpg"} />
        <IaDescription />
        <GalleryImageIa />
        <Footer />
      </main>
    </LoadingWrapper>
  );
};

export default ImagesIa;
