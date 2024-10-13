import NavigationPage from "@/components/nav/navigationpage";
import style from "./imagesia.module.scss";
import GalleryImagesIa from "@/components/gallery/galleryimagesia";

const imagesData = [
  {
    id: "0",
    image: "/proyect.png",
  },
  {
    id: "1",
    image: "/proyect-1.png",
  },
  {
    id: "2",
    image: "/proyect-2.png",
  },
  {
    id: "3",
    image: "/proyect-3.png",
  },
  {
    id: "4",
    image: "/proyect-4.png",
  },
  {
    id: "5",
    image: "/proyect-5.png",
  },
  {
    id: "6",
    image: "/proyect-6.png",
  },
  {
    id: "7",
    image: "/proyect-7.png",
  },
  {
    id: "8",
    image: "/proyect-8.png",
  },
  {
    id: "9",
    image: "/proyect-9.png",
  },
  {
    id: "10",
    image: "/proyect-10.png",
  },
  {
    id: "11",
    image: "/proyect-11.png",
  },
  {
    id: "12",
    image: "/proyect-12.png",
  },
  {
    id: "13",
    image: "/proyect-13.png",
  },
  {
    id: "14",
    image: "/proyect-14.png",
  },
  {
    id: "15",
    image: "/proyect-15.png",
  },
];

const ImagesIA = () => {
  return (
    <section className={style.contentimagesia}>
      <NavigationPage />
      <div className={style.gallerybox}>
        <GalleryImagesIa items={imagesData} />
      </div>
    </section>
  );
};

export default ImagesIA;
