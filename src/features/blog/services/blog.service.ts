export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  examples?: example[];

  author: any; // Replace with proper User type
  tags: any[]; // Replace with proper Tag type
}

export interface example {
  title: string;
  description?: string;
  imageUrl?: string;
  codeSnippet?: string;
}

const API_URL = ''; // Replace with your actual API URL

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${API_URL}/articles`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const response = await fetch(`${API_URL}/articles/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  return response.json();
}
