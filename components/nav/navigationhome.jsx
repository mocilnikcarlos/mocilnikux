"use client";

import { ButtonHome } from "../buttons/buttons";
import style from "./navigation.module.scss";

const navLinks = [
  { href: "/projects", label: "Proyectos" },
  { href: "/imagesia", label: "Imágenes IA" },
  { href: "/hablemos", label: "Hablemos" },
];

const NavigationHome = () => {
  return (
    <nav>
      <ul className={style.listnavhome}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <ButtonHome href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationHome;
