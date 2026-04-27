import type { Article } from "../../blog/services/blog.service";

export interface Project {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string; // URL da imagem vinda da sua API
  slug?: string;
  userId: string;
  user: string;
  articles: Article[];
  createdAt: Date;
  updatedAt: Date;
}

export async function getFeaturedProjects() {
  const response = await fetch("/projects/projects", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar projetos");
  }

  return response.json();
}

// Mock para teste:
// return [
//   {
//     id: "automacao-n8n",
//     title: "Automação com n8n",
//     description: "Como integrei Instagram e WhatsApp para um MVP.",
//     thumbnail: "/projects/n8n-case.jpg",
//   },
//   {
//     id: "api-nodejs-typescript",
//     title: "API Escalável",
//     description: "Arquitetura Service-Repository em Node.js.",
//     thumbnail: "/projects/backend-case.jpg",
//   },
//   {
//     id: "frontend-react",
//     title: "Frontend Moderno",
//     description: "Interface responsiva com React e css modules.",
//     thumbnail: "/projects/frontend-case.jpg",
//   },
// ];
