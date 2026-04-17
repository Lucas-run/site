import React from "react";
import styles from "./ArticleSection.module.css";
import type { Article } from "../services/blog.service";

interface ArticleSectionProps {
  article: Article;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ article }) => {
  return (
    <div className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleSection;
