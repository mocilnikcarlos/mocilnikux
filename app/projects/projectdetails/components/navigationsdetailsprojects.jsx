"use client";

import { useRouter } from "next/navigation";
import style from "./navigationsdetailsprojects.module.scss";
import ReturnToTop from "@/components/svg/returntotop";

const NavigationsDetailsProjects = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={style.nav}>
      <button onClick={handleBack} className={style.link}>
        Volver
      </button>
      <button onClick={scrollToTop} className={style.returntotop}>
        <ReturnToTop />
      </button>
    </nav>
  );
};

export default NavigationsDetailsProjects;
