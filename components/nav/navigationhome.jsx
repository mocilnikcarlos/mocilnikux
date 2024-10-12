"use client";

import { ButtonHome } from "../buttons/buttons";
//import style from "./navigation.module.scss";

const navLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/imagenesia", label: "Imágenes IA" },
  { href: "/hablemos", label: "Hablemos" },
];

const NavigationHome = () => {
  return (
    <nav>
      {navLinks.map((link) => (
        <ButtonHome key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
};

export default NavigationHome;
