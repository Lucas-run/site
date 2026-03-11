import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import styles from "./ServiceSection.module.css";
import { Server, Code2, Zap } from "lucide-react";

const skills = [
  {
    icon: <Server size={40} />,
    title: "Backend & APIs",
    description:
      "Desenvolvimento de APIs escaláveis com Node.js e TypeScript, focadas em performance, segurança e integração entre sistemas.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Arquitetura de Software",
    description:
      "Organização de projetos seguindo padrões de camadas (Service-Repository) no Backend para fácil manutenção e testes e padrão Component-Based no Frontend para máxima reutilização.",
  },
  {
    icon: <Zap size={40} />,
    title: "Automação & Processos",
    description:
      "Criação de automações e integrações entre sistemas para reduzir tarefas manuais e otimizar fluxos de trabalho.",
  },
];

export function ServiceSection() {
  return (
    <section id="servicos" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Principais Habilidades</h2>
          <p className={styles.subtitle}>
            Especialidades técnicas focadas em resultados tangíveis.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
