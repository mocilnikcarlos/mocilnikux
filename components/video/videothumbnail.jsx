// components/VideoThumbnail.js
import Image from "next/image";
import styles from "./globalvideo.module.scss";

const VideoThumbnail = ({
  index,
  image,
  video,
  onClick,
  onMouseEnter,
  onMouseLeave,
  videoRef,
}) => (
  <div
    key={index}
    className={styles.item}
    onClick={() => onClick(video)}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={() => onMouseLeave(index)}
  >
    <div className={styles.imageWrapper}>
      <Image
        src={image}
        alt={`Image ${index + 1}`}
        layout="responsive"
        width={1}
        height={1}
        className={styles.img}
      />
      <video
        ref={videoRef}
        className={styles.video}
        src={video}
        muted
        loop
        preload="auto"
      />
    </div>
  </div>
);

export default VideoThumbnail;
