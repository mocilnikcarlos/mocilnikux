"use client";

import { useVideo } from "@/components/hook/useVideo";
import VideoThumbnail from "@/components/video/videothumbnail";
import ModalVideo from "@/components/video/modalvideo";
import useMedia from "@/components/hook/useMedia";
import styles from "./galleryvideo.module.scss";

const GalleryVideo = () => {
  const { images, loading, error } = useMedia();
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
            video={item.video_url}
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
