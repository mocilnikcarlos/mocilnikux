import Image from "next/image";
import style from "./imageproject.module.scss";

const ImageProject = ({ width = 1040, imageName }) => {
  return (
    <div className={style.imagecontainer}>
      <Image
        src={`/${imageName}.png`}
        alt="User Laura Jukeapp"
        width={width}
        height={0}
        layout="responsive"
      />
    </div>
  );
};

export default ImageProject;
