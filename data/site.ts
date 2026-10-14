const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Leonardo Dariva",
  role: "Editor de vídeo · Audiovisual",
  description:
    "Editor de vídeo com olhar para narrativa, ritmo e acabamento, transformando material bruto em histórias visuais claras e envolventes.",
  url: deploymentUrl,
  github: "https://github.com/leonardodariva",
  linkedin: "https://www.linkedin.com/in/leonardodariva",
  // Substitua pelo link wa.me com seu número quando quiser ativar o contato direto.
  whatsapp: "https://wa.me/?text=Ol%C3%A1%20Leonardo%2C%20vim%20pelo%20seu%20portf%C3%B3lio.",
  email: "leodarivask@gmail.com",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  objective: string;
  contribution: string;
  challenge: string;
  stack: string[];
  features: string[];
  metrics?: { value: string; label: string }[];
  liveUrl?: string;
  repositoryUrl: string;
  visual: "pirate" | "dance" | "portfolio" | "saas";
  coverImage: string;
  gallery: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "pirate-battle",
    title: "Pirate Battle",
    eyebrow: "Jungle Gaming · Technical Challenge",
    year: "2026",
    summary:
      "Um shooter naval 2D para navegador, com simulação em tempo real, controles por teclado e toque, inimigos com comportamentos distintos e uma camada de dados resiliente.",
    objective:
      "Transformar um desafio técnico em uma experiência de jogo completa, testável e pronta para produção — sem esconder a complexidade da simulação dentro da interface.",
    contribution:
      "Desenvolvi o produto de ponta a ponta: arquitetura, regras da simulação, renderização, interface, API mockada, persistência, acessibilidade e estratégia de testes.",
    challenge:
      "Separar o loop de jogo da renderização e da UI. A simulação roda em TypeScript puro com timestep fixo; PixiJS desenha snapshots e React recebe apenas um resumo semântico desacelerado.",
    stack: [
      "React 19",
      "TypeScript",
      "PixiJS 8",
      "Vite",
      "Vitest",
      "Playwright",
      "TanStack Query",
      "Axios",
      "MSW",
    ],
    features: [
      "Combate naval com três tipos de disparo",
      "Inimigos Chaser e Shooter",
      "Controles desktop e mobile",
      "Ranking e histórico de partidas",
      "Fila offline e registro idempotente",
      "Estados, colisões e persistência",
    ],
    metrics: [
      { value: "69", label: "testes unitários" },
      { value: "22", label: "cenários E2E" },
      { value: "60", label: "updates por segundo" },
      { value: "strict", label: "TypeScript" },
    ],
    liveUrl: "https://pirate-battle-pi.vercel.app/",
    repositoryUrl: "https://github.com/leonardodariva/pirate-battle",
    visual: "pirate",
    coverImage:
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample.png",
    gallery: [
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_menu.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_ranking.png",
      "https://raw.githubusercontent.com/leonardodariva/pirate-battle/main/assets/sample_result.png",
    ],
    featured: true,
  },
];

export const technologyGroups = [
  {
    title: "Narrativa",
    description: "Da ideia ao roteiro visual.",
    items: ["Storytelling", "Roteiro visual", "Referências", "Direção criativa"],
  },
  {
    title: "Montagem",
    description: "Ferramentas para transformar material bruto em ritmo.",
    items: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Cortes", "Trilha", "Sound design"],
  },
  {
    title: "Acabamento",
    description: "Cada detalhe reforça a intenção do vídeo.",
    items: ["Color grading", "Mixagem", "Legendas", "Revisão", "Formatos", "Exportação"],
  },
  {
    title: "Entrega",
    description: "Vídeos prontos para cada canal e objetivo.",
    items: ["Reels", "YouTube", "Institucional", "Motion", "Social media", "Cinema"],
  },
];

export const experience = [
  {
    company: "Futuro Corp",
    role: "UI/UX & Product Designer",
    period: "Atual",
    description:
      "Participação na definição e evolução de produtos digitais, conectando fluxos, componentes, experiência e validação com stakeholders.",
  },
  {
    company: "Glass Aplicativos e Softwares",
    role: "Desenvolvedor Web · UI/UX · Product Designer",
    period: "Experiência anterior",
    description:
      "Desenvolvimento de interfaces web, dashboards e páginas responsivas com HTML, CSS e JavaScript, além de arquitetura de informação, protótipos e contato com clientes.",
  },
];
