import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

export function Hamburger({ isActive, onClick }: HamburgerProps) {
  return (
    <button
      className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
      type="button"
    >
      <div className={styles.inner}></div>
    </button>
  );
}
