import { useEffect, useState } from "react";
import styles from "./PortfolioSection.module.css";
import { getFeaturedProjects } from "../services/portfolio.service";
import { Container } from "../../../components/ui/Container";
import { ProjectCard } from "../../../components/ui/ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getFeaturedProjects().then((data) => setProjects(data));
  }, []);

  return (
    <section id="portfolio" className={styles.section}>
      <Container>
        <h2 className={styles.title}>Projetos em Destaque</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
