import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card-${index + 1}`} data-reveal>
      <Link className="project-image-link" href={`/projetos/${project.slug}`} aria-label={`Ver case ${project.title}`}>
        <span className="project-image-frame">
          <img src={project.coverImage} alt={`Interface do projeto ${project.title}`} loading={index === 0 ? "eager" : "lazy"} />
          <span className="project-image-wash" aria-hidden="true" />
        </span>
      </Link>
      <div className="project-card-copy">
        <h3><Link href={`/projetos/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="project-card-meta">
          <span>{project.eyebrow}</span>
          <div className="project-card-action">
            <Link className="project-card-cta" href={`/projetos/${project.slug}`}>
              Acessar projeto
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
