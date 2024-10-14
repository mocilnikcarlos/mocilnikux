"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./not-found.module.scss";

const NotFoundPage = () => {
  const pathname = usePathname();
  const param = pathname.split("/").pop();

  return (
    <div className={style.contentnamefail}>
      <h2 className={style.title}>
        ¡Ups! Parece que te has desviado...{" "}
        <span className={style.span}>{param}</span>
        <br /> En el mundo del diseño, esto podría significar{" "}
        <span className={style.span}>¡Quiero saber más sobre ti!</span>
      </h2>
      <p className={style.text}>
        ¿Charlamos y exploramos cómo podemos trabajar juntos?
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
        <Link href="/" className={style.btnback}>
          No, no significa eso 🙄
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
