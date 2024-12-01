"use client";
import { useEffect, useState } from "react";
import { getVideoByName } from "../utils/getVideoByName";
import Preload from "../utils/preloadcomponent";
import BackgroundVideo from "../video/bakgroundvideo";

const VideoHero = ({ videoName }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      const url = await getVideoByName(videoName);
      setVideoUrl(url);
      setLoading(false);
    };

    if (videoName) {
      fetchVideo();
    }
  }, [videoName]);

  if (loading) {
    return <Preload />;
  }

  if (!videoUrl) {
    return <div>Video not found</div>;
  }

  return (
    <>
      <BackgroundVideo video={videoUrl} />
    </>
  );
};

export default VideoHero;
