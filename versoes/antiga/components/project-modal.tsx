import type { ReactNode, RefObject } from "react";
import { FiX } from "react-icons/fi";
import { ProjectContactLink } from "@/components/project-contact-link";

export type ProjectModalData = {
  slug: string;
  title: string;
  eyebrow: string;
  summary?: string;
  contribution?: string;
  tools?: string[];
  publicUrl?: string;
};

export function ProjectModal({
  project,
  closeButtonRef,
  onClose,
  dialogClassName,
  minimal = false,
  hideHeaderInfo = false,
  hideContactLink = false,
  children,
}: {
  project: ProjectModalData;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  dialogClassName?: string;
  minimal?: boolean;
  hideHeaderInfo?: boolean;
  hideContactLink?: boolean;
  children: ReactNode;
}) {
  const detailItems = [
    project.summary ? { label: "Sobre o projeto", text: project.summary } : null,
    project.contribution ? { label: "O que foi desenvolvido", text: project.contribution } : null,
  ].filter((item): item is { label: string; text: string } => Boolean(item));

  return (
    <div className={`project-player-modal${minimal ? " project-player-modal-minimal" : ""}${dialogClassName?.includes("reel") ? " project-player-modal-reel" : ""}`} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className={`project-player-dialog${minimal ? " project-player-dialog-minimal" : ""}${dialogClassName ? ` ${dialogClassName}` : ""}`} role="dialog" aria-modal="true" aria-labelledby={hideHeaderInfo ? undefined : `${project.slug}-player-title`} aria-label={hideHeaderInfo ? project.title : undefined}>
        <div className={`project-player-header${hideHeaderInfo ? " project-player-header-compact" : ""}`}>
          {!hideHeaderInfo && (
            <div>
              <p className="section-label">{project.eyebrow}</p>
              <h3 id={`${project.slug}-player-title`}>{project.title}</h3>
            </div>
          )}
          <button ref={closeButtonRef} className="project-player-close" type="button" onClick={onClose} aria-label="Fechar player">
            <FiX size={20} />
          </button>
        </div>
        {children}
        {!minimal && detailItems.length > 0 && (
          <div className="project-modal-details">
            {detailItems.map((item) => (
              <div key={item.label}>
                <p className="section-label">{item.label}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
        {!minimal && project.tools && project.tools.length > 0 && (
          <div className="project-modal-tools">
            <p className="section-label">Ferramentas</p>
            <ul>
              {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        )}
        {!minimal && !hideContactLink && <ProjectContactLink project={project} />}
      </div>
    </div>
  );
}
