import Link from "next/link";
import { FiCheck, FiFileText, FiFilm, FiMail, FiPenTool, FiSquare, FiTarget, FiZap } from "react-icons/fi";
import { HeroTitle } from "@/components/hero-title";
import { IntroLoader } from "@/components/intro-loader";
import { ProjectCard } from "@/components/project-card";
import { ProofTrail } from "@/components/proof-trail";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisualProjectCard } from "@/components/visual-project-card";
import { featuredVideos, graphicProjects, motionProjects, services } from "@/data/site";

const journey = [
  { number: "01", title: "Entender a história", text: "Objetivos, público e intenção entram primeiro. A edição começa pela mensagem que precisa chegar.", icon: FiTarget },
  { number: "02", title: "Encontrar o ritmo", text: "Cortes, trilha, pausas e movimento organizam a narrativa antes do acabamento.", icon: FiSquare },
  { number: "03", title: "Construir a narrativa", text: "Imagem, som e motion se encontram para transformar material bruto em uma experiência que prende a atenção.", icon: FiFilm },
  { number: "04", title: "Refinar e entregar", text: "Revisão, cor, áudio e formatos finais garantem uma entrega consistente em cada tela.", icon: FiCheck },
];

const serviceIcons = {
  "Video Editing": FiFilm,
  "Motion Design": FiZap,
  "Graphic Design": FiPenTool,
};

export default function Home() {
  return (
    <>
      <IntroLoader />
      <ScrollEffects />
      <SiteHeader />

      <main id="top">
        <section className="hero v3-hero" aria-labelledby="hero-title">
          <div className="page-shell v3-hero-inner">
            <div className="hero-topline">
              <p>Adobe Premiere Pro · After Effects · DaVinci Resolve</p>
              <p>YouTube · Reels · Horizontal · Vertical</p>
            </div>
            <div className="v3-hero-copy" id="hero-title">
              <p className="hero-overline">LEONARDO DARIVA · FREELANCE</p>
              <HeroTitle />
              <div className="hero-actions" aria-label="Ações principais">
                <Link className="hero-action hero-action-primary" href="#projetos">Ver meus trabalhos <FiFilm aria-hidden="true" size={15} /></Link>
                <Link className="hero-action hero-action-secondary" href="#contato">Entrar em contato <FiMail aria-hidden="true" size={15} /></Link>
              </div>
            </div>
            <div className="hero-bottomline">
              <div className="hero-scroll-cue">
                <span className="hero-scroll-cue-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                Role para explorar
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section v3-projects-section">
          <div className="page-shell">
            <div className="v3-section-heading" data-reveal>
              <p className="section-label">Portfólio audiovisual e visual</p>
              <h2>Trabalhos selecionados.</h2>
              <p>Edição, motion e design gráfico organizados em uma seleção direta para mostrar diferentes formas de transformar ideias em imagem.</p>
            </div>
            <div className="project-format-group">
              <div className="project-format-heading" data-reveal>
                <h3><span className="project-format-index">01</span> Shorts &amp; Reels</h3>
                <p className="section-label">Formato vertical</p>
              </div>
              <div className="work-grid">
                {featuredVideos.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
              </div>
            </div>
            <div className="project-format-group">
              <div className="project-format-heading" data-reveal>
                <h3><span className="project-format-index">02</span> Animação e Criação Visual</h3>
                <p className="section-label">Motion design · VFX</p>
              </div>
              <div className="visual-project-grid motion-project-grid">
                {motionProjects.map((project, index) => <VisualProjectCard key={project.slug} project={project} index={index} />)}
              </div>
            </div>
            <div className="project-format-group">
              <div className="project-format-heading" data-reveal>
                <h3><span className="project-format-index">03</span> Design Gráfico</h3>
                <p className="section-label">Identidade · Peças visuais</p>
              </div>
              <div className="visual-project-grid graphic-project-grid">
                {graphicProjects.map((project, index) => <VisualProjectCard key={project.slug} project={project} index={index} />)}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section services-section">
          <div className="page-shell">
            <div className="services-heading" data-reveal>
              <p className="section-label">O que eu faço</p>
              <h2>Três formas de dar movimento às ideias.</h2>
              <p>Edição, motion e design gráfico para transformar uma intenção em uma entrega visual clara.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const ServiceIcon = serviceIcons[service.title];

                return (
                  <article className="service-card" data-reveal key={service.title}>
                    <div className="service-card-top">
                      <span className="service-number">0{index + 1}</span>
                      <span className="service-icon" aria-hidden="true"><ServiceIcon size={24} /></span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="section v3-about-section process-about-section">
          <div className="page-shell process-about-process">
            <div className="process-about-heading" data-reveal>
              <p className="section-label">Como eu trabalho</p>
              <h2>Da intenção ao corte final.</h2>
              <p>Um processo claro para transformar material bruto em uma narrativa que prende a atenção.</p>
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
          <span id="sobre" className="section-anchor" aria-hidden="true" />
          <div className="page-shell process-about-intro">
            <div className="v3-about-grid">
              <div className="v3-about-portrait" data-reveal>
                <div className="portrait-window">
                  <img src="/brand/leonardo-dariva.svg" alt="Marca de Leonardo Dariva" loading="lazy" />
                </div>
                <div className="portrait-caption"><span>Leonardo Dariva — Editor de vídeo</span><span>Apucarana · PR</span></div>
              </div>
              <div className="v3-about-copy" data-reveal>
                <p className="section-label">Sobre mim</p>
                <h2>Existe uma história<br />por trás de cada corte.</h2>
                <p className="about-statement">Sou um profissional criativo que trabalha com edição de vídeo, motion design e design gráfico.</p>
                <p>Gosto de transformar ideias em conteúdos visuais que comunicam, envolvem e valorizam cada projeto — da escolha dos planos ao acabamento final.</p>
                <div className="about-specialties" aria-label="Especialidades">
                  <span>Video Editing</span>
                  <span>Motion Design</span>
                  <span>Graphic Design</span>
                </div>
                <Link className="about-contact-link" href="#contato">Entrar em contato <FiMail size={15} aria-hidden="true" /></Link>
              </div>
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
                <article><span className="section-label">Formatos</span><strong>YouTube · Reels · Shorts</strong><p>Vídeos horizontais e verticais pensados para cada plataforma, tela e objetivo.</p></article>
              </div>
              <Link className="resume-highlight-link" href="/curriculo">Ver currículo completo <span><FiFileText size={16} aria-hidden="true" /></span></Link>
            </div>
        </section>
      </main>
      <div id="contato"><SiteFooter /></div>
    </>
  );
}
