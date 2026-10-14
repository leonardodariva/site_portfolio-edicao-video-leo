import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";
import { SiteHeader } from "@/components/site-header";
import { experience, projects, siteConfig, technologyGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Currículo profissional de Leonardo Dariva, Front-end Developer.",
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="resume-page">
        <div className="page-shell resume-shell">
          <header className="resume-header">
            <div><p>Currículo · 2026</p><h1>Leonardo<br />Dariva</h1><strong>Front-end Developer · UI/UX background</strong></div>
            <div className="resume-actions"><PrintButton /><a className="secondary-button" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          </header>
          <div className="resume-grid">
            <aside>
              <section><h2>Contato</h2><a href={siteConfig.github}>github.com/leonardodariva</a><a href={siteConfig.linkedin}>linkedin.com/in/leonardodariva</a><p>Apucarana, Paraná · Brasil</p></section>
              <section><h2>Competências</h2>{technologyGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>)}</section>
            </aside>
            <div className="resume-main">
              <section><h2>Perfil</h2><p>{siteConfig.description} Experiência anterior em UI/UX e Product Design aplicada como vantagem complementar à implementação.</p></section>
              <section><h2>Experiência</h2>{experience.map((item) => <article key={item.company}><p>{item.period}</p><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.description}</p></article>)}</section>
              <section><h2>Projetos selecionados</h2>{projects.map((project) => <article key={project.slug}><p>{project.year}</p><h3>{project.title}</h3><strong>{project.eyebrow}</strong><p>{project.summary}</p><a href={project.repositoryUrl}>Repositório ↗</a></article>)}</section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
