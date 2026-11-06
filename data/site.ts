const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export const siteConfig = {
  name: "Leonardo Dariva",
  role: "Editor de vídeo · Audiovisual",
  description:
    "Editor de vídeo com olhar para narrativa, ritmo e acabamento, transformando material bruto em histórias visuais claras e envolventes.",
  url: deploymentUrl,
  linkedin: "https://www.linkedin.com/in/leonardodariva",
  whatsapp: whatsappNumber ? `https://wa.me/${whatsappNumber}` : undefined,
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
  tools: string[];
  features: string[];
  metrics?: { value: string; label: string }[];
  liveUrl?: string;
  visual: "portfolio";
  coverImage: string;
  gallery: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "selecao-audiovisual",
    title: "Seleção audiovisual",
    eyebrow: "Edição de vídeo · Em atualização",
    year: "2026",
    summary:
      "Uma seleção de trabalhos de edição, motion e narrativa visual que será atualizada com os vídeos produzidos por Leonardo.",
    objective:
      "Reunir em um só lugar vídeos que mostrem diferentes possibilidades de ritmo, linguagem e acabamento para cada história.",
    contribution:
      "A seleção será organizada a partir do papel de Leonardo em cada trabalho: montagem, escolha de ritmo, tratamento visual, motion, trilha, sound design e entrega.",
    challenge:
      "Encontrar a melhor forma de apresentar cada vídeo sem tirar o foco do que importa: a intenção da peça, as escolhas de edição e a experiência de quem assiste.",
    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Motion design",
      "Color grading",
      "Sound design",
    ],
    features: [
      "Vídeos para redes sociais",
      "Conteúdo institucional e de marca",
      "Cortes, ritmo e continuidade",
      "Motion, títulos e transições",
      "Tratamento de cor e áudio",
      "Entregas em formatos verticais e horizontais",
    ],
    visual: "portfolio",
    coverImage: "/project-video-placeholder.svg",
    gallery: [],
    featured: true,
  },
];

export type FeaturedVideo = {
  slug: string;
  title: string;
  eyebrow: string;
  summary?: string;
  contribution?: string;
  tools?: string[];
  publicUrl?: string;
  coverImage: string;
  videoUrl?: string;
  presentation?: "visual" | "detail";
  format?: "reel" | "long-form";
  playback?: "inline" | "modal";
};

export type VisualProject = {
  slug: string;
  title: string;
  eyebrow: string;
  summary?: string;
  contribution?: string;
  tools?: string[];
  publicUrl?: string;
  coverImage: string;
  aspectRatio?: "landscape" | "square" | "portrait";
};

export const featuredVideos: FeaturedVideo[] = [
  {
    slug: "reel-01",
    title: "Reel 01",
    eyebrow: "Reel · Vertical · Instagram",
    coverImage: "/project-video-placeholder.svg",
    videoUrl: "/videos/reel-01.mp4",
    presentation: "visual",
    format: "reel",
    playback: "modal",
  },
];

export const motionProjects: VisualProject[] = [
  {
    slug: "motion-01",
    title: "Motion design 01",
    eyebrow: "Motion design · Em atualização",
    summary: "Espaço reservado para uma animação, composição ou efeito visual do portfólio.",
    coverImage: "/project-video-placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    slug: "motion-02",
    title: "Motion design 02",
    eyebrow: "Animação · Em atualização",
    summary: "Espaço reservado para uma peça de motion e criação visual.",
    coverImage: "/project-video-placeholder.svg",
    aspectRatio: "landscape",
  },
];

export const graphicProjects: VisualProject[] = [
  {
    slug: "design-01",
    title: "Design gráfico 01",
    eyebrow: "Graphic design · Em atualização",
    summary: "Espaço reservado para uma identidade, arte digital ou peça de campanha.",
    coverImage: "/project-video-placeholder.svg",
    aspectRatio: "square",
  },
  {
    slug: "design-02",
    title: "Design gráfico 02",
    eyebrow: "Design visual · Em atualização",
    summary: "Espaço reservado para uma thumbnail, composição ou peça publicitária.",
    coverImage: "/project-video-placeholder.svg",
    aspectRatio: "square",
  },
];

export type Service = {
  title: "Video Editing" | "Motion Design" | "Graphic Design";
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Video Editing",
    description: "Edição de vídeos para YouTube, Shorts, Reels, criadores, empresas e projetos digitais.",
    deliverables: ["Vídeos curtos", "Vídeos longos", "Cortes e podcasts", "Montagem e finalização"],
  },
  {
    title: "Motion Design",
    description: "Criação de animações e elementos gráficos em movimento para vídeos e conteúdos digitais.",
    deliverables: ["Animação de textos", "Motion graphics", "Vinhetas", "Transições"],
  },
  {
    title: "Graphic Design",
    description: "Criação de materiais visuais para comunicação digital e apresentação de projetos.",
    deliverables: ["Identidades visuais", "Artes para redes", "Thumbnails", "Peças digitais"],
  },
];

// Mantido para a página de currículo, que apresenta o processo e as ferramentas em outro contexto.
export const capabilityGroups = [
  {
    title: "Narrativa",
    description: "Da ideia ao roteiro visual.",
    items: ["Storytelling", "Roteiro visual", "Referências", "Direção criativa"],
  },
  {
    title: "Ferramentas",
    description: "Recursos para transformar material bruto em ritmo e linguagem.",
    items: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Motion design", "Color grading", "Sound design"],
  },
  {
    title: "Acabamento",
    description: "Cada detalhe reforça a intenção do vídeo.",
    items: ["Color grading", "Mixagem", "Legendas", "Revisão", "Formatos", "Exportação"],
  },
  {
    title: "Formatos e plataformas",
    description: "Uma mesma ideia pode ganhar a melhor forma em cada canal.",
    items: ["YouTube", "Reels · Instagram", "TikTok", "Shorts", "Horizontal · 16:9", "Vertical · 9:16"],
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  role?: string;
  image?: string;
};

// Conteúdo real será adicionado quando os depoimentos forem enviados.
export const testimonials: Testimonial[] = [];

export const experience = [
  {
    company: "Olhar visual",
    role: "Composição e direção",
    period: "Base criativa",
    description:
      "Atuação com composição, clareza e intenção visual em projetos que precisam comunicar melhor.",
  },
  {
    company: "Processo criativo",
    role: "Clareza e comunicação",
    period: "Experiência complementar",
    description:
      "Experiência com processos criativos, organização de ideias e contato com clientes para transformar necessidades em soluções visuais.",
  },
];
