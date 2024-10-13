"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./button.module.scss";

const ButtonHome = ({ href, label }) => {
  return (
    <Link href={href} className={style.buttonhome}>
      {label}
    </Link>
  );
};

const ButtonPage = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === `/${href}`;

  return (
    <Link
      href={href}
      className={`${style.buttonpage} ${isActive ? style.active : ""}`}
    >
      {label}
    </Link>
  );
};

export { ButtonHome, ButtonPage };
