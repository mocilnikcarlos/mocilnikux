"use client";
import { useEffect, useState } from "react";
import Logo from "../svg/logo";
import Navigation from "../navigation/navigation";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.blurred : ""}`}>
      <div className={styles.contentheader}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
