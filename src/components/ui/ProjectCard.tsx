import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import type { Project } from "../../features/landing/services/portfolio.service";

export function ProjectCard({ name, description, thumbnail, article }: Project) {
  if (!article) {
    return (
      <div className={styles.card} aria-disabled="true">
        <div className={styles.imageWrapper}>
          <img src={thumbnail} alt={name} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.linkText}>Artigo em breve</span>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/blog/${article.slug}`} className={styles.card}>
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
