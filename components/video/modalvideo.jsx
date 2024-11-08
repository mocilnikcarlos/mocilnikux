import styles from "./globalvideo.module.scss";

const ModalVideo = ({ videoSrc, onClose }) => {
  const handleClickContent = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleClickContent}>
        <video
          controls
          className={styles.modalVideo}
          src={videoSrc}
          autoPlay
          preload="auto"
        />
      </div>
    </div>
  );
};

export default ModalVideo;
