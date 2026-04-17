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
  // Assuming author and tags are other models not included in this snippet
  author: any; // Replace with proper User type
  tags: any[]; // Replace with proper Tag type
}

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

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
