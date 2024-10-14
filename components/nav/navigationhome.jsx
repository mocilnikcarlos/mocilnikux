"use client";

import { ButtonHome } from "../buttons/buttons";
import style from "./navigation.module.scss";

const navLinks = [
  { href: "/projects", label: "Proyectos" },
  { href: "/imagesia", label: "Imágenes IA" },
  {
    href: "https://calendly.com/catquantum/exploremos-juntos-como-puedo-contribuir-a-tu-equipo",
    label: "Hablemos",
    newWindow: true,
  },
];

const NavigationHome = () => {
  return (
    <nav>
      <ul className={style.listnavhome}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <ButtonHome
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

export default NavigationHome;
