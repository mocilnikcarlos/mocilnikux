"use client";

import { ButtonPage } from "../buttons/buttons";
import style from "./navigation.module.scss";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/imagenes-ia", label: "Imágenes IA" },
  { href: "/hablemos", label: "Hablemos" },
];

const NavigationPage = () => {
  return (
    <nav>
      <ul className={style.listnavpage}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <ButtonPage href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPage;
