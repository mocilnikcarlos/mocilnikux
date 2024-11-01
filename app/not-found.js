"use client";

import { usePathname } from "next/navigation";
import styles from "./not-found.module.scss";
import { ButtonNav } from "@/components/button/buttons";

const NameProjectFail = () => {
  const pathname = usePathname();
  const param = pathname.split("/").pop();

  return (
    <div className={styles.contentnamefail}>
      <h3 className={styles.title}>
        La página <span className={styles.span}>{param}</span> no existe.
      </h3>
      <ButtonNav href={"/"} label={"Volver al portafolio"} />
    </div>
  );
};

export default NameProjectFail;
