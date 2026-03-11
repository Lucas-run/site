import styles from "./Card.module.css";

interface CardProps {
  icon: React.ReactNode; // Permite passar um ícone (SVG ou Lucide-react)
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
