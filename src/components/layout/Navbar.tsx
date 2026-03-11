import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { Hamburger } from "../ui/Hamburger";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useScrollTo } from "../../hooks/useScrollTo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const scrollTo = useScrollTo();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={styles.navbarWrapper}>
      <Container>
        <div className={styles.navbarContent}>
          <div className={styles.hamburgerWrapper}>
            <Hamburger isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <a href="#sobre" onClick={(e) => scrollTo(e, "sobre", closeMenu)}>
              Sobre
            </a>
            <a
              href="#servicos"
              onClick={(e) => scrollTo(e, "servicos", closeMenu)}
            >
              Serviços
            </a>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
