"use client";

import { useRouter } from "next/navigation";
import style from "./navigationsdetailsprojects.module.scss";

const NavigationsDetailsProjects = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav>
      <button onClick={handleBack} className={style.link}>
        Volver
      </button>
    </nav>
  );
};

export default NavigationsDetailsProjects;
