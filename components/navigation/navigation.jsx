"use client";
import { usePathname } from "next/navigation";
import { ButtonNav } from "@/components/button/buttons";
import styles from "./navigation.module.scss";
import { useState } from "react"; // Importamos useState

const navItems = [
  { id: 1, label: "Portafolio", href: "/" },
  { id: 2, label: "Interfaz", href: "/interface" },
  { id: 3, label: "Imágenes IA", href: "/imagesia" },
  { id: 4, label: "Certificados", href: "/certificates" },
  // { id: 5, label: "Hablemos", href: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Botón de menú (hamburguesa) */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      </button>

      {/* Lista de navegación */}
      <ul className={`${styles.listnav} ${isMenuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <ButtonNav
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
