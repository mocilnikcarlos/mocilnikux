"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./bodycasestudy.module.scss";

const BodyCaseStudy = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setVisibleImages((prev) => [...prev, index]);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.sectionCaseStudy}>
      <ul className={styles.listCaseStudy}>
        {images.map((image, index) => (
          <li
            key={index}
            data-index={index}
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <Image
              src={image.src}
              alt={"CaseStudy"}
              width={1040}
              height={0}
              style={{ height: "auto" }}
              layout="responsive"
              className={
                visibleImages.includes(index.toString())
                  ? styles.visible
                  : styles.hidden
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BodyCaseStudy;
