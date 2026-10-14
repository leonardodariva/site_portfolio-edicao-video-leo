import { siteConfig } from "@/data/site";
import { FiMessageCircle } from "react-icons/fi";

export function ProofTrail() {
  return (
    <div className="proof-trail-stage">
      <div className="proof-trail-copy">
        <p className="section-label">Vamos conversar</p>
        <h2>Vamos construir algo relevante.</h2>
        <p>Tem um produto para tirar do papel ou uma interface para evoluir? Conte o contexto e eu respondo com próximos passos claros.</p>
        <a href={`mailto:${siteConfig.email}?subject=Vamos conversar sobre um projeto`} aria-label="Enviar e-mail sobre um projeto">Falar sobre um projeto <span><FiMessageCircle size={16} aria-hidden="true" /></span></a>
      </div>
    </div>
  );
}
