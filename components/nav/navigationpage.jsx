"use client";

import { ButtonPage } from "../buttons/buttons";
import style from "./navigation.module.scss";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/imagesia", label: "Imágenes IA" },
  {
    href: "https://calendly.com/catquantum/exploremos-juntos-como-puedo-contribuir-a-tu-equipo",
    label: "Hablemos",
    newWindow: true,
  },
];

const NavigationPage = () => {
  return (
    <nav className={style.navpages}>
      <ul className={style.listnavpage}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <ButtonPage
              href={link.href}
              label={link.label}
              newWindow={link.newWindow}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPage;
