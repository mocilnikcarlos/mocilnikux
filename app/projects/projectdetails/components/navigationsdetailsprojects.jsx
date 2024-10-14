"use client";

import style from "./navigationsdetailsprojects.module.scss";
import ReturnToTop from "@/components/svg/returntotop";
import Link from "next/link";

const NavigationsDetailsProjects = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={style.nav}>
      <Link href={"/projects"} className={style.link}>
        Volver
      </Link>
      <button onClick={scrollToTop} className={style.returntotop}>
        <ReturnToTop />
      </button>
    </nav>
  );
};

export default NavigationsDetailsProjects;
