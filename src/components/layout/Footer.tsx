import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScrollTo } from "../../hooks/useScrollTo";
import { Container } from "../ui/Container";
import styles from "./Footer.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (location.pathname === "/") {
      // Se já estiver na Home, usa o seu hook de scroll suave
      scrollTo(e, id);
    } else {
      navigate(`/`);
      scrollTo(e, id);
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topContent}>
          <div className={styles.brand}>
            <h3 className={styles.name}>Lucas Ramos</h3>
            <p className={styles.tagline}>
              Desenvolvedor Fullstack & Especialista em Automações.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h4>Navegação</h4>
            <nav>
              <Link to="/">Home</Link>
              <a href="#sobre" onClick={(e) => handleNavigation(e, "sobre")}>
                Sobre
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleNavigation(e, "servicos")}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavigation(e, "portfolio")}
              >
                Portfólio
              </a>
              <Link to="/blog">Blog</Link>
            </nav>
          </div>

          <div className={styles.socialGroup}>
            <h4>Conecte-se</h4>
            <div className={styles.icons}>
              <a
                href="https://github.com/Lucas-run"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/lucas-ramos-cruz-dev"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={20} />
              </a> */}
              <a href="mailto:dev.lucas.contato@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} — Desenvolvido com React.</p>
        </div>
      </Container>
    </footer>
  );
}
