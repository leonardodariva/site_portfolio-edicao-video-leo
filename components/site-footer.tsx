import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { SocialIcon } from "@/components/social-icon";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-brand-row">
          <Link className="monogram footer-monogram" href="/" aria-label="Leonardo Dariva — início"><Image className="brand-mark" src="/brand/leonardo-dariva.svg" alt="" width={40} height={40} /></Link>
          <span>Front-end Developer · Brasil</span>
        </div>
        <div className="footer-heading">
          <h2>Vamos construir<br />o próximo projeto.</h2>
          <div className="footer-actions" aria-label="Canais de contato">
            <a className="round-cta round-cta-linkedin" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" size={22} /><small>LinkedIn</small></a>
            <a className="round-cta round-cta-whatsapp" href={siteConfig.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><SocialIcon name="whatsapp" size={22} /><small>WhatsApp</small></a>
            <a className="round-cta round-cta-github" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" size={22} /><small>GitHub</small></a>
            <a className="round-cta round-cta-email" href={`mailto:${siteConfig.email}?subject=Contato pelo portfólio`} aria-label="E-mail"><SocialIcon name="email" size={22} /><small>E-mail</small></a>
          </div>
        </div>
        <div className="footer-grid">
          <div><span className="footer-label">Disponível para</span><p>Front-end · React · Product Engineering · Game UI</p></div>
          <div className="footer-links"><span className="footer-label">Links</span><a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${siteConfig.email}`}>E-mail ↗</a><Link href="/curriculo">Currículo ↗</Link></div>
          <div><span className="footer-label">Baseado em</span><p>Apucarana, Paraná<br />Brasil</p></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Leonardo Dariva</span>
          <span>Desenvolvido com Next.js</span>
          <a href="#top">↑ Voltar ao topo</a>
        </div>
      </div>
      </footer>
      <a className="whatsapp-float" href={siteConfig.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
        <SocialIcon name="whatsapp" size={22} />
      </a>
    </>
  );
}
