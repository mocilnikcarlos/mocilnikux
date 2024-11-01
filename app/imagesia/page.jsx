import Header from "@/components/header/header";
import GalleryImageIa from "./components/galleryimagesia";
import ImageHero from "@/components/componentspages/imagehero";
import IaDescription from "./components/iadescription";
import Footer from "@/components/footer/footer";

const ImagesIa = () => {
  return (
    <>
      <Header />
      <main>
        <ImageHero backgroundImage={"/heroimageia.jpg"} />
        <IaDescription />
        <GalleryImageIa />
        <Footer />
      </main>
    </>
  );
};

export default ImagesIa;
