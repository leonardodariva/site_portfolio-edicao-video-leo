import type { Project } from "@/data/site";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "portfolio") {
    return (
      <div className="project-visual portfolio-visual" aria-hidden="true">
        <span className="portfolio-visual-mark">LD</span>
        <small>PORTFÓLIO DEV</small>
        <strong>design<br /><em>+ código</em></strong>
        <span className="portfolio-visual-footer">FRONT-END · UI/UX · PRODUTO</span>
      </div>
    );
  }

  if (type === "saas") {
    return (
      <div className="project-visual saas-visual" aria-hidden="true">
        <div className="saas-window-bar"><span /><span /><span /></div>
        <div className="saas-sidebar" />
        <div className="saas-dashboard"><strong>SaaS Psicologia</strong><span /><i /><b /></div>
      </div>
    );
  }

  if (type === "dance") {
    return (
      <div className="project-visual dance-visual" aria-hidden="true">
        <div className="dance-nav"><span>NO RITMO</span><span>MENU</span></div>
        <div className="dance-copy">
          <small>DESDE 1995</small>
          <strong>O seu ritmo.<br />A sua dança.</strong>
          <span className="dance-cta">CONHEÇA AS AULAS ↗</span>
        </div>
        <div className="dance-orbit dance-orbit-one" />
        <div className="dance-orbit dance-orbit-two" />
        <div className="dance-figure"><span /><i /></div>
      </div>
    );
  }

  return (
    <div className="project-visual pirate-visual" aria-hidden="true">
      <div className="game-topbar">
        <span>PIRATE BATTLE</span>
        <span>02:00</span>
        <span>000240</span>
      </div>
      <div className="island island-one" />
      <div className="island island-two" />
      <div className="ship player-ship"><span>▲</span></div>
      <div className="ship enemy-ship"><span>▲</span></div>
      <div className="projectile projectile-one" />
      <div className="projectile projectile-two" />
      <div className="game-status"><span>HULL 84%</span><span>W A S D · Q E · SPACE</span></div>
    </div>
  );
}
