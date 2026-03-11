import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  thumbnail: string; // URL da imagem vinda da sua API
}

export function ProjectCard({
  id,
  name,
  description,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Link to={`/blog/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.linkText}>Ler artigo →</span>
      </div>
    </Link>
  );
}
