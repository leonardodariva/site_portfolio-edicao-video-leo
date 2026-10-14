import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="case-page" id="top">
        <section className="case-hero dotted-bg">
          <div className="page-shell">
            <Link className="back-link" href="/#projetos">← Todos os projetos</Link>
            <div className="case-title-row">
              <div><p>{project.eyebrow}</p><h1>{project.title}</h1></div>
              <span>{project.year}</span>
            </div>
            <p className="case-summary">{project.summary}</p>
            <div className="case-actions">
              {project.liveUrl && <a className="primary-button" href={project.liveUrl} target="_blank" rel="noreferrer">Abrir projeto <span>↗</span></a>}
              <a className="secondary-button" href={project.repositoryUrl} target="_blank" rel="noreferrer">Ver código <span>↗</span></a>
            </div>
          </div>
        </section>

        <div className="page-shell case-visual-wrap"><ProjectVisual type={project.visual} /></div>

        {project.metrics && (
          <section className="case-metrics page-shell" aria-label="Métricas do projeto">
            {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </section>
        )}

        <section className="section case-story">
          <div className="page-shell case-story-grid">
            <p className="section-label"><span>01</span> O contexto</p>
            <div><h2>Problema e objetivo</h2><p>{project.objective}</p></div>
            <div><h2>Minha contribuição</h2><p>{project.contribution}</p></div>
          </div>
        </section>

        <section className="section case-detail dotted-bg">
          <div className="page-shell case-detail-grid">
            <div><p className="section-label"><span>02</span> Decisão técnica</p><h2>O desafio central.</h2></div>
            <div><p className="case-detail-lead">{project.challenge}</p></div>
            <div className="case-list-block"><h3>Funcionalidades</h3><ul>{project.features.map((item) => <li key={item}><span>↳</span>{item}</li>)}</ul></div>
            <div className="case-list-block"><h3>Tecnologias</h3><ul>{project.stack.map((item) => <li key={item}><span>↳</span>{item}</li>)}</ul></div>
          </div>
        </section>

        {projects.length > 1 && (
          <section className="next-case page-shell">
            <p>Próximo case</p>
            <Link href={`/projetos/${nextProject.slug}`}>{nextProject.title} <span>↗</span></Link>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
