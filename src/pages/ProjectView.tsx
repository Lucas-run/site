import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  type Article,
  getArticleBySlug,
} from "../features/blog/services/blog.service";
import IntroSection from "../features/blog/components/IntroSection";
import ArticleSection from "../features/blog/components/ArticleSection";
import ExampleSection from "../features/blog/components/ExampleSection";
import styles from "./ArticleView.module.css";

type ProjectArticle = Article & {
  projectId?: string | null;
};

export function ProjectView() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ProjectArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (slug) {
        const fetchedArticle = (await getArticleBySlug(slug)) as ProjectArticle;
        setArticle(fetchedArticle.projectId ? fetchedArticle : null);
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.articleContainer}>
      {article && (
        <>
          <IntroSection article={article} />
          <ArticleSection article={article} />
          {article.examples && article.examples.length > 0 && (
            <ExampleSection examples={article.examples} />
          )}
        </>
      )}
    </div>
  );
}
