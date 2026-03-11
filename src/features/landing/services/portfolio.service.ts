export async function getFeaturedProjects() {
  // Aqui você chamará sua API real

  const response = await fetch("http://localhost:3000/projects/projects", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();

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
}
