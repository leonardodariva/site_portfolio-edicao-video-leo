import Link from "next/link";
import { FiCheck, FiCode, FiFileText, FiSquare, FiTarget } from "react-icons/fi";
import { HeroTitle } from "@/components/hero-title";
import { IntroLoader } from "@/components/intro-loader";
import { ProjectCard } from "@/components/project-card";
import { ProofTrail } from "@/components/proof-trail";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { experience, projects, technologyGroups } from "@/data/site";

const journey = [
  { number: "01", title: "Entender o contexto", text: "Objetivos, pessoas e restrições entram primeiro. A tecnologia vem depois, como consequência de uma decisão clara.", icon: FiTarget },
  { number: "02", title: "Desenhar o sistema", text: "Fluxos, conteúdo, estados e componentes formam uma linguagem única antes que a interface ganhe código.", icon: FiSquare },
  { number: "03", title: "Construir com intenção", text: "React, TypeScript e uma arquitetura preparada para crescer sem perder legibilidade, acesso ou desempenho.", icon: FiCode },
  { number: "04", title: "Validar e evoluir", text: "Testes, responsividade e observação do uso real transformam a primeira entrega em um produto que continua melhorando.", icon: FiCheck },
];

export default function Home() {
  return (
    <>
      <IntroLoader />
      <ScrollEffects />
      <SiteHeader />

      <main id="top">
        <section className="hero v3-hero" aria-labelledby="hero-title">
          <div className="hero-ambient-smoke" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="page-shell v3-hero-inner">
            <div className="hero-kicker">
              <span>Leonardo Dariva</span>
              <span>Portfólio</span>
              <span>Brasil · disponível para colaborar</span>
            </div>
            <div className="v3-hero-copy" id="hero-title"><HeroTitle /></div>
            <div className="hero-bottomline">
              <p>Transformo contexto de produto em interfaces claras, acessíveis e prontas para crescer.</p>
              <div className="hero-scroll-cue">
                <span className="hero-scroll-cue-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                Role para explorar
              </div>
              <p>React · TypeScript · Next.js · UI/UX</p>
            </div>
          </div>
        </section>

        <section id="processo" className="journey-section">
          <div className="page-shell journey-layout">
            <div className="journey-intro" data-reveal>
              <p className="section-label">Como eu trabalho</p>
              <h2>Um parceiro de desenvolvimento<br />em quem você pode confiar.</h2>
              <p>Entro onde a execução importa — da descoberta e da interface até a construção e o lançamento. Assim um projeto avança da primeira conversa para o produto no ar.</p>
            </div>
            <div className="journey-cards">
              {journey.map((item) => {
                const JourneyIcon = item.icon;

                return (
                  <article className="journey-card" data-reveal key={item.number}>
                    <div className="journey-number">{item.number}</div>
                    <div className="journey-mark" aria-hidden="true"><JourneyIcon /></div>
                    <div className="journey-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projetos" className="section v3-projects-section">
          <div className="page-shell">
            <div className="v3-section-heading" data-reveal>
              <p className="section-label">Trabalho selecionado</p>
              <h2>Projetos que transformam<br />contexto em produto.</h2>
              <p>Do conceito ao código, cada entrega combina clareza de produto, cuidado visual e uma base pronta para evoluir.</p>
            </div>
            <div className="work-grid">
              {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section id="sobre" className="section v3-about-section">
          <div className="page-shell v3-about-grid">
            <div className="v3-about-portrait" data-reveal>
              <div className="portrait-window">
                <img src="https://avatars.githubusercontent.com/u/48518784?v=4" alt="Retrato de Leonardo Dariva" loading="lazy" />
              </div>
              <div className="portrait-caption"><span>Leonardo Dariva — Front-end Developer</span><span>Apucarana · PR</span></div>
            </div>
            <div className="v3-about-copy" data-reveal>
              <p className="section-label">Sobre mim</p>
              <h2>Existe uma pessoa<br />por trás do código.</h2>
              <p className="about-statement">Sou Leonardo, desenvolvedor front-end com experiência anterior em UI/UX e Product Design.</p>
              <p>Essa trajetória me ensinou a enxergar o produto inteiro: problema, experiência, interface e implementação. Hoje aprofundo React, TypeScript, Next.js, APIs, arquitetura e testes, evoluindo progressivamente para Full Stack.</p>
              <div className="experience-intro">
                <p className="section-label">Experiência</p>
              </div>
              <div className="career-list">
                {experience.map((item) => (
                  <article key={item.company}><h3>{item.company}</h3><p>{item.role}</p><small>{item.period}</small></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section v3-stack-section">
          <div className="page-shell">
            <div className="v3-stack-title" data-reveal><p className="section-label">Tecnologias</p><h2>Ferramentas entram<br />quando fazem sentido.</h2></div>
            <div className="capability-list">
              {technologyGroups.map((group, index) => (
                <article key={group.title} data-reveal><span>0{index + 1}</span><div><h3>{group.title}</h3><p>{group.description}</p></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
              ))}
            </div>
          </div>
        </section>

        <section id="prova" className="v3-proof-section">
          <ProofTrail />
        </section>

        <section id="experiencia" className="section delivery-section resume-highlight-section">
            <div className="page-shell">
              <div className="delivery-heading">
                <div><p className="section-label">Currículo em resumo</p><h2>Uma trajetória entre produto, design e código.</h2></div>
                <p>Experiência em UI/UX e desenvolvimento front-end, conectando decisões de produto a interfaces claras, acessíveis e prontas para crescer.</p>
              </div>
              <div className="resume-highlight-grid">
                <article><span className="section-label">Experiência</span><strong>Front-end + UI/UX</strong><p>Uma visão de produto que aproxima interface, engenharia e uso real.</p></article>
                <article><span className="section-label">Especialidade</span><strong>React · TypeScript · Next.js</strong><p>Implementações consistentes, responsivas e preparadas para evoluir.</p></article>
                <article><span className="section-label">Disponibilidade</span><strong>Projetos digitais</strong><p>Colaboração com equipes e negócios que valorizam clareza e boa execução.</p></article>
              </div>
              <Link className="resume-highlight-link" href="/curriculo">Ver currículo completo <span><FiFileText size={16} aria-hidden="true" /></span></Link>
            </div>
        </section>
      </main>
      <div id="contato"><SiteFooter /></div>
    </>
  );
}
