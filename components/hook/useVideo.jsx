"use cliet";

import { useState, useRef } from "react";

export const useVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoRefs = useRef([]);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
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
