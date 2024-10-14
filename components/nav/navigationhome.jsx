"use client";

import { ButtonHome } from "../buttons/buttons";
import style from "./navigation.module.scss";

const navProjets = [
  { href: "/projects/jukeapp", label: "JukeApp" },
  { href: "/projects/clinia", label: "Clinia" },
  { href: "/projects/fleet", label: "FleetSolutions" },
  { href: "/projects/tiptap", label: "TipTap" },
  { href: "/projects/ciclo", label: "Ciclo" },
];

const navMore = [
  { href: "/imagesia", label: "Imágenes IA" },
  { href: "/projects", label: "Todos los proyectos" },
  {
    href: "https://calendly.com/catquantum/exploremos-juntos-como-puedo-contribuir-a-tu-equipo",
    label: "Hablemos",
    newWindow: true,
  },
];

const NavigationHome = () => {
  return (
    <nav className={style.nav}>
      <div className={style.menus}>
        <h3>Proyectos</h3>
        <ul className={style.listnavhome}>
          {navProjets.map((link) => (
            <li key={link.href}>
              <ButtonHome
                href={link.href}
                label={link.label}
                newWindow={link.newWindow}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.menus}>
        <h3>Más</h3>
        <ul className={style.listnavhome}>
          {navMore.map((link) => (
            <li key={link.href}>
              <ButtonHome
                href={link.href}
                label={link.label}
                newWindow={link.newWindow}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationHome;
