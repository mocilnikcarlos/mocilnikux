//"use cliet";

import { useState, useRef } from "react";

export const useVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoRefs = useRef([]);

  // Abrir el modal con el video correspondiente
  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true); // Actualizamos el estado para abrir el modal
  };

  // Cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false); // Cerramos el modal
    setCurrentVideo(null); // Limpiamos el video actual
  };

  const handleMouseEnter = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.currentTime = 0;
    videoElement.play();
  };

  const handleMouseLeave = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.pause();
  };

  return {
    currentVideo,
    isModalOpen,
    openModal,
    closeModal,
    handleMouseEnter,
    handleMouseLeave,
    videoRefs,
  };
};
