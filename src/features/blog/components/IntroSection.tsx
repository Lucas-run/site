import React from 'react';
import styles from './IntroSection.module.css';
import { type Article } from '../services/blog.service';

interface IntroSectionProps {
  article: Article;
}

const IntroSection: React.FC<IntroSectionProps> = ({ article }) => {
  return (
    <div className={styles.intro}>
      <h1>{article.title}</h1>
      <div className={styles.meta}>
        <span>By: {article.author.name}</span> 
        <span>On: {new Date(article.createdAt).toLocaleDateString()}</span>
      </div>
      <img src={`/images/${article.slug}-cover.jpg`} alt={article.title} className={styles.cover} />
    </div>
  );
};

export default IntroSection;
