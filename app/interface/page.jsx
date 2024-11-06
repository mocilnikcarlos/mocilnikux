import ImageHero from "@/components/componentspages/imagehero";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import LoadingWrapper from "@/components/helper/loadingwrapper";
import InterfaceDescription from "./components/interfacedescription";
import GalleryVideo from "./components/galleryvideo";

const ImagesIa = () => {
  return (
    <LoadingWrapper>
      <Header />
      <main>
        <ImageHero backgroundImage={"/bgui.png"} />
        <InterfaceDescription />
        <GalleryVideo />
        <Footer />
      </main>
    </LoadingWrapper>
  );
};

export default ImagesIa;
