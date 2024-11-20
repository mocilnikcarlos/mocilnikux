"use client";
import { useState, useEffect } from "react";
import styles from "./footerprojects.module.scss";
import Link from "next/link";
import Image from "next/image";
import useProjects from "../hook/useProjects";

const FooterProjects = ({ projectId }) => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(-65);
  const { projects, loading, error } = useProjects();

  const currentProjectIndex = projects.findIndex(
    (project) => project.project_id === projectId
  );

  const nextProjectIndex =
    currentProjectIndex === -1
      ? 0
      : (currentProjectIndex + 1) % projects.length;

  const nextProject = projects[nextProjectIndex];

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPercentage = Math.min(
      scrollY / (scrollHeight - windowHeight),
      1
    );

    const rotationValue = -65 + scrollPercentage * 65;
    setRotation(rotationValue);
  }, [scrollY]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div
        className={styles.imageWrapper}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <p>Descubrí el siguiente proyecto:</p>

        <Link href={`/${nextProject.href}`}>
          <Image
            className={styles.image}
            src={nextProject.src || "/image.png"}
            alt="Imagen del siguiente proyecto"
            width={600}
            height={400}
            layout="intrinsic"
          />
        </Link>
        <div className={styles.square}></div>
      </div>
    </div>
  );
};

export default FooterProjects;
