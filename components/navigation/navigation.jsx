import { useRouter } from "next/navigation";
import { ButtonNav } from "../button/buttons";
import styles from "./navigation.module.scss";

const navItems = [
  { id: 1, label: "Portafolio", href: "/" },
  { id: 2, label: "Imágenes IA", href: "/imagesia" },
  { id: 3, label: "Certificados", href: "/certificates" },
  { id: 4, label: "Hablemos", href: "/contact" },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles.listnav}>
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <li key={item.id}>
              <ButtonNav
                label={item.label}
                href={item.href}
                isActive={isActive}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
