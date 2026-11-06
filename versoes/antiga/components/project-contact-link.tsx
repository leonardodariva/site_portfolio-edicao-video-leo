import { FiMessageCircle } from "react-icons/fi";
import { siteConfig } from "@/data/site";

type ContactProject = {
  title: string;
  publicUrl?: string;
};

export function getProjectContactHref(project: ContactProject) {
  const messageLines = [
    `Olá! Vi seu portfólio e gostei do projeto ${project.title}.`,
    "Gostaria de conversar sobre um trabalho nesse estilo.",
  ];

  if (project.publicUrl) messageLines.push(`Link: ${project.publicUrl}`);

  if (siteConfig.whatsapp) {
    try {
      const url = new URL(siteConfig.whatsapp);
      url.searchParams.set("text", messageLines.join("\n\n"));
      return url.toString();
    } catch {
      return siteConfig.whatsapp;
    }
  }

  const subject = encodeURIComponent(`Projeto no estilo de ${project.title}`);
  const body = encodeURIComponent(messageLines.join("\n\n"));
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ProjectContactLink({ project }: { project: ContactProject }) {
  return (
    <a
      className="project-contact-link"
      href={getProjectContactHref(project)}
      target="_blank"
      rel="noreferrer"
    >
      Quero um projeto nesse estilo
      <FiMessageCircle size={16} aria-hidden="true" />
    </a>
  );
}
