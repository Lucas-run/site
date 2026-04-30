import React from "react";
import styles from "./ArticleSection.module.css";
import type { Article } from "../services/blog.service";
// import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";

interface ArticleSectionProps {
  article: Article;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ article }) => {
  return (
    <div className={styles.article}>
      <div className={styles.markdownContent}>
        <Markdown>{article.content}</Markdown>
      </div>
    </div>
  );
};

export default ArticleSection;
