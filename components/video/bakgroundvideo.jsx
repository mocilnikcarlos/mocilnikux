import styles from "./globalvideo.module.scss";

const BackgroundVideo = ({ video }) => (
  <div className={styles.videoBackground}>
    <video
      className={styles.backgroundVideo}
      src={video}
      muted
      loop
      autoPlay
      preload="auto"
    />
  </div>
);

export default BackgroundVideo;
