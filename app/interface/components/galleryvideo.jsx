// components/GalleryVideo.js
"use client";

import { useVideo } from "@/components/hook/useVideo";
import VideoThumbnail from "@/components/video/videothumbnail";
import ModalVideo from "@/components/video/modalvideo";
import styles from "./galleryvideo.module.scss";

const images = [
  {
    image: "/movieapp.jpg",
    video:
      "https://bmsvllipemqpakakisrv.supabase.co/storage/v1/object/public/videos/movieapp.mp4?t=2024-11-06T16%3A27%3A42.145Z",
  },
  {
    image: "/fastfoods.jpg",
    video:
      "https://bmsvllipemqpakakisrv.supabase.co/storage/v1/object/public/videos/fastfood.mp4?t=2024-11-06T16%3A36%3A02.353Z",
  },
  {
    image: "/fullcars.jpg",
    video:
      "https://bmsvllipemqpakakisrv.supabase.co/storage/v1/object/public/videos/fullcars.mp4?t=2024-11-06T16%3A41%3A04.276Z",
  },
  {
    image: "/yourassistant.jpg",
    video:
      "https://bmsvllipemqpakakisrv.supabase.co/storage/v1/object/public/videos/yourassitant.mp4",
  },
  {
    image: "/planet.jpg",
    video:
      "https://bmsvllipemqpakakisrv.supabase.co/storage/v1/object/public/videos/planet.mp4",
  },
];

const GalleryVideo = () => {
  const {
    currentVideo,
    isModalOpen,
    openModal,
    closeModal,
    handleMouseEnter,
    handleMouseLeave,
    videoRefs,
  } = useVideo();

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section className={styles.gallery}>
        {images.map((item, index) => (
          <VideoThumbnail
            key={index}
            index={index}
            image={item.image}
            video={item.video}
            onClick={openModal}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            videoRef={(el) => (videoRefs.current[index] = el)}
          />
        ))}
      </section>

      {isModalOpen && (
        <ModalVideo videoSrc={currentVideo} onClose={handleOutsideClick} />
      )}
    </>
  );
};

export default GalleryVideo;
