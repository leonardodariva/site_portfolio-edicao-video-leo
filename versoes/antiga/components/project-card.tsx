"use client";

import { useEffect, useRef, useState } from "react";
import { FiFilm, FiPlay } from "react-icons/fi";
import type { FeaturedVideo } from "@/data/site";
import { ProjectModal } from "@/components/project-modal";

const VIDEO_PLAY_EVENT = "portfolio:video-play";

function isYouTubeUrl(source?: string) {
  return Boolean(source && /^https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\//i.test(source));
}

function getYouTubeEmbedUrl(source: string) {
  try {
    const url = new URL(source);
    const id = url.hostname.includes("youtu.be")
      ? url.pathname.slice(1)
      : url.searchParams.get("v") ?? url.pathname.split("/embed/")[1];

    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
      : source;
  } catch {
    return source;
  }
}

export function ProjectCard({ project, index }: { project: FeaturedVideo; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isVisualOnly = project.presentation === "visual";
  const isYouTubeVideo = isYouTubeUrl(project.videoUrl);
  const isLongForm = project.format === "long-form";
  const isModalPlayback = project.playback === "modal" || isLongForm;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openPlayer = () => {
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.dispatchEvent(new CustomEvent(VIDEO_PLAY_EVENT, { detail: { slug: project.slug } }));
    setIsPlaying(true);
  };

  useEffect(() => {
    const closeWhenAnotherVideoStarts = (event: Event) => {
      const detail = (event as CustomEvent<{ slug?: string }>).detail;
      if (detail?.slug && detail.slug !== project.slug) setIsPlaying(false);
    };

    window.addEventListener(VIDEO_PLAY_EVENT, closeWhenAnotherVideoStarts);
    return () => window.removeEventListener(VIDEO_PLAY_EVENT, closeWhenAnotherVideoStarts);
  }, [project.slug]);

  useEffect(() => {
    if (!isPlaying || !isModalPlayback) return;

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = triggerRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPlaying(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      previousActiveElement?.focus();
    };
  }, [isPlaying, isModalPlayback]);

  const renderPlayer = (modal = false) => {
    if (project.videoUrl && isYouTubeVideo) {
      return (
        <iframe
          className={`${modal ? "project-player-video" : "project-player-video-inline"} project-player-embed`}
          title={`Player de ${project.title}`}
          src={getYouTubeEmbedUrl(project.videoUrl)}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (project.videoUrl) {
      return (
        <video
          className={modal ? "project-player-video" : "project-player-video-inline"}
          controls
          autoPlay
          playsInline
          loop={false}
          preload="metadata"
          poster={project.coverImage}
          src={project.videoUrl}
          onEnded={(event) => event.currentTarget.pause()}
          onPlay={(event) => {
            window.dispatchEvent(new CustomEvent(VIDEO_PLAY_EVENT, { detail: { slug: project.slug } }));
            if (event.currentTarget.ended) event.currentTarget.currentTime = 0;
          }}
        />
      );
    }

    return (
      <div className={`project-player-placeholder${modal ? "" : " project-player-placeholder-inline"}`}>
        <FiFilm size={34} aria-hidden="true" />
        <strong>Vídeo em preparação</strong>
        <span>O arquivo deste projeto será inserido aqui.</span>
      </div>
    );
  };

  return (
    <>
      <article className={`project-card project-card-${index + 1}${isVisualOnly ? " project-card-visual-only" : ""}${isLongForm ? " project-card-long-form" : ""}${isPlaying && !isModalPlayback ? " project-card-playing" : ""}`} data-reveal>
        {isPlaying && !isModalPlayback ? (
          <div className="project-inline-player">{renderPlayer()}</div>
        ) : (
          <button
            className="project-image-link project-media-trigger"
            type="button"
            onClick={openPlayer}
            aria-label={`Reproduzir ${project.title}`}
          >
            <span className="project-image-frame">
              <img src={project.coverImage} alt={`Capa do projeto ${project.title}`} loading={index === 0 ? "eager" : "lazy"} />
              <span className="project-image-wash" aria-hidden="true" />
              <span className="project-play-icon" aria-hidden="true"><FiPlay size={20} /></span>
            </span>
          </button>
        )}

        <div className={`project-card-copy${isVisualOnly ? " project-card-copy-visual" : ""}`}>
          <button className="project-title-trigger" type="button" onClick={openPlayer}>{project.title}</button>
          {project.summary && <p>{project.summary}</p>}
          {!isVisualOnly && (
            <div className="project-card-meta">
              <span>{project.eyebrow}</span>
              <span className="project-watch-label"><FiPlay aria-hidden="true" size={12} /> Assistir na página</span>
            </div>
          )}
        </div>
      </article>

      {isPlaying && isModalPlayback && (
        <ProjectModal
          project={project}
          closeButtonRef={closeButtonRef}
          onClose={() => setIsPlaying(false)}
          dialogClassName={project.format === "reel" ? "project-player-dialog-reel" : undefined}
          minimal={project.format === "reel"}
          hideHeaderInfo={project.format === "reel"}
          hideContactLink={project.format === "reel"}
        >
          {renderPlayer(true)}
        </ProjectModal>
      )}
    </>
  );
}
