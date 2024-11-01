import Image from "next/image";
import styles from "./bodycasestudy.module.scss";

const BodyCaseStudy = ({ images }) => {
  return (
    <section className={styles.sectionCaseStudy}>
      <ul className={styles.listCaseStudy}>
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image.src}
              alt={"CaseStudy"}
              width={1040}
              height={0}
              style={{ height: "auto" }}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BodyCaseStudy;
