"use client";

import { useEffect, useRef, useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import type { VisualProject } from "@/data/site";
import { ProjectModal } from "@/components/project-modal";

export function VisualProjectCard({ project, index }: { project: VisualProject; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = triggerRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <article className={`visual-project-card visual-project-card-${index + 1} visual-project-card-${project.aspectRatio ?? "landscape"}`} data-reveal>
        <button
          className="visual-project-trigger"
          type="button"
          onClick={(event) => { triggerRef.current = event.currentTarget; setIsOpen(true); }}
          aria-label={`Ampliar ${project.title}`}
        >
          <span className="visual-project-image-frame">
            <img src={project.coverImage} alt={`Capa do projeto ${project.title}`} loading={index === 0 ? "eager" : "lazy"} />
            <span className="project-image-wash" aria-hidden="true" />
            <span className="visual-project-expand" aria-hidden="true"><FiMaximize2 size={17} /></span>
          </span>
        </button>
        <div className="visual-project-copy">
          <h4>{project.title}</h4>
          <p className="visual-project-eyebrow">{project.eyebrow}</p>
          {project.summary && <p>{project.summary}</p>}
        </div>
      </article>

      {isOpen && (
        <ProjectModal project={project} closeButtonRef={closeButtonRef} onClose={() => setIsOpen(false)} minimal hideHeaderInfo>
          <img src={project.coverImage} alt={`Visualização ampliada de ${project.title}`} />
        </ProjectModal>
      )}
    </>
  );
}
