import { ButtonAction } from "@/components/button/buttons";
import styles from "./globalvideo.module.scss";

const ModalVideo = ({ videoSrc, onClose }) => (
  <div className={styles.modal} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <ButtonAction onClick={onClose} className={styles.closeBtn} />
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

export default ModalVideo;
