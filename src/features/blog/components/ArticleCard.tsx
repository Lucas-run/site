import React from "react";
import styles from "./ArticleCard.module.css";
import type { Article } from "../services/blog.service";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/blog/${article.slug}`)}
    >
      <img
        // src={`https://your-image-url.com/${article.slug}-thumbnail.jpg`}
        src={article.coverImage}
        alt={article.title}
        className={styles.thumbnail}
      />
      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
