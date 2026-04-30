import { useEffect, useState } from "react";
import {
  getArticles,
  type Article,
} from "../features/blog/services/blog.service";
import ArticleCard from "../features/blog/components/ArticleCard";
import styles from "./Blog.module.css";

export function Blog() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const articles = await getArticles();
      console.log("Dados que chegaram no Front:", articles);
      setArticles(articles);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.gridContainer}>
      {articles &&
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
    </div>
  );
}
