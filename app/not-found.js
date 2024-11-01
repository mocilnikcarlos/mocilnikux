"use client";

import { usePathname } from "next/navigation";
import style from "./not-found.module.scss";
import Link from "next/link";

const NameProjectFail = () => {
  const pathname = usePathname();
  const param = pathname.split("/").pop();

  return (
    <div className={style.contentnamefail}>
      <h2 className={style.title}>
        ¡Wow ... <span className={style.span}>{param}</span> es un gran nombre
        para un proyecto!
      </h2>
      <p className={style.text}>
        ¿Que te parece si trabajamos juntos y lo diseñamos?
      </p>
      <div className={style.buttons}>
        <a
          href="https://calendly.com/catquantum/exploremos-juntos-como-puedo-contribuir-a-tu-equipo"
          target="_blank"
          rel="noopener noreferrer"
          className={style.btnspeack}
        >
          Hablemos 😉
        </a>
        <Link href={"/"} className={style.btnback}>
          Mejor otro dia 🙄
        </Link>
      </div>
    </div>
  );
};

export default NameProjectFail;
