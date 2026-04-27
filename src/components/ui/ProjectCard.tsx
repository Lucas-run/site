import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import type { Project } from "../../features/landing/services/portfolio.service";

export function ProjectCard({ id, name, description, thumbnail }: Project) {
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
