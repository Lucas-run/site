import { Container } from "../ui/Container";
import styles from "./Footer.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#portfolio">Portfólio</a>
              <a href="/blog">Blog</a>
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
