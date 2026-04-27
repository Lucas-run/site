import { useEffect, useState } from "react";
// Ajuste o caminho abaixo para onde seu arquivo de serviço realmente está:
import {
  getFeaturedProjects,
  type Project,
} from "../features/landing/services/portfolio.service";
import { ProjectCard } from "../components/ui/ProjectCard";
import styles from "./Blog.module.css";
// import type { Article } from "../features/blog/services/blog.service";

export function Projects() {
  // Mantendo o padrão de estado do seu Blog.tsx
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFeaturedProjects();
        console.log("Dados de projetos que chegaram no Front:", data);
        setProjects(data);
      } catch (error) {
        console.error("Erro na busca:", error);
        setProjects([]); // Evita que o map quebre em caso de erro
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.gridContainer}>
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  );
}
