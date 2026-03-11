import { Container } from "../../../components/ui/Container";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="sobre" className={styles.section}>
      <Container>
        {/* Lado esquerdo */}
        <div className={styles.wrapper}>
          {/* Lado Esquerdo: Texto */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>Olá, eu sou o Lucas Ramos.</h1>
            <p className={styles.description}>
              Sou um desenvolvedor fullstack. Tenho experiência em criar APIs
              robustas, arquiteturas escaláveis e integrações para tirar MVPs do
              papel e ajudar pequenos negócios a crescerem com tecnologia
              sólida.
            </p>
          </div>
          {/* Lado Direito: Imagem */}
          <div className={styles.imageContent}>
            <img
              src="/sua-foto.jpg" // Coloque "sua-foto.jpg" na pasta public/ do Vite
              alt="Foto de perfil"
              className={styles.profileImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
