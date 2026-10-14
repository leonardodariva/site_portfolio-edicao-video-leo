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
  { number: "01", title: "Entender a história", text: "Objetivos, público e intenção entram primeiro. A edição começa pela mensagem que precisa chegar.", icon: FiTarget },
  { number: "02", title: "Encontrar o ritmo", text: "Cortes, trilha, pausas e movimento organizam a narrativa antes do acabamento.", icon: FiSquare },
  { number: "03", title: "Construir a narrativa", text: "Imagem, som e motion se encontram para transformar material bruto em uma experiência que prende a atenção.", icon: FiCode },
  { number: "04", title: "Refinar e entregar", text: "Revisão, cor, áudio e formatos finais garantem uma entrega consistente em cada tela.", icon: FiCheck },
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
              <p>Transformo ideias em narrativas visuais claras, ritmadas e prontas para publicar.</p>
              <div className="hero-scroll-cue">
                <span className="hero-scroll-cue-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                Role para explorar
              </div>
              <p>Edição · Motion · Storytelling · Audiovisual</p>
            </div>
          </div>
        </section>

        <section id="processo" className="journey-section">
          <div className="page-shell journey-layout">
            <div className="journey-intro" data-reveal>
              <p className="section-label">Como eu trabalho</p>
              <h2>Um olhar criativo<br />para cada história.</h2>
              <p>Entro onde a narrativa precisa ganhar ritmo — da organização do material bruto ao corte final, com cuidado visual, sonoro e intenção em cada escolha.</p>
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
              <h2>Projetos que transformam<br />ideias em movimento.</h2>
              <p>Da primeira referência ao corte final, cada trabalho combina narrativa, ritmo e cuidado visual para comunicar melhor.</p>
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
              <div className="portrait-caption"><span>Leonardo Dariva — Editor de vídeo</span><span>Apucarana · PR</span></div>
            </div>
            <div className="v3-about-copy" data-reveal>
              <p className="section-label">Sobre mim</p>
              <h2>Existe uma história<br />por trás de cada corte.</h2>
              <p className="about-statement">Sou Leonardo, editor de vídeo com olhar para narrativa, ritmo e experiência visual.</p>
              <p>Meu trabalho parte do material bruto e encontra a melhor forma de contar cada história: escolha de planos, montagem, trilha, som, cor e motion.</p>
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
                <div><p className="section-label">Currículo em resumo</p><h2>Uma trajetória entre imagem, ritmo e narrativa.</h2></div>
                <p>Experiência em produto e design aplicada à edição de vídeo, conectando intenção, ritmo e linguagem visual.</p>
              </div>
              <div className="resume-highlight-grid">
                <article><span className="section-label">Experiência</span><strong>Edição + direção visual</strong><p>Um olhar de produto aplicado a cortes, sequências e histórias que precisam ser sentidas.</p></article>
                <article><span className="section-label">Especialidade</span><strong>Montagem · Motion · Color</strong><p>Da organização do material bruto ao acabamento final, com consistência em cada detalhe.</p></article>
                <article><span className="section-label">Disponibilidade</span><strong>Projetos audiovisuais</strong><p>Colaboração com pessoas e marcas que querem comunicar melhor em vídeo.</p></article>
              </div>
              <Link className="resume-highlight-link" href="/curriculo">Ver currículo completo <span><FiFileText size={16} aria-hidden="true" /></span></Link>
            </div>
        </section>
      </main>
      <div id="contato"><SiteFooter /></div>
    </>
  );
}
