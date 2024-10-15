"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./button.module.scss";
import ArrowRight from "../svg/arrowright";

const ButtonHome = ({ href, label, newWindow = false }) => {
  return (
    <Link
      href={href}
      className={style.buttonhome}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined} // Seguridad adicional
    >
      {label}
      <span className={style.arrowwrapper}>
        <ArrowRight />
      </span>
    </Link>
  );
};

const ButtonPage = ({ href, label, newWindow = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${style.buttonpage} ${isActive ? style.active : ""}`}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined} // Seguridad adicional
    >
      {label}
    </Link>
  );
};

export { ButtonHome, ButtonPage };
