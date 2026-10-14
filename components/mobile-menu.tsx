"use client";

import { useState } from "react";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { SocialIcon } from "@/components/social-icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="menu-overlay">
          <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegação principal">
            <p>Navegação</p>
            {navigationLinks.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <small>0{index + 1}</small>
                <span>{label}</span>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
            <div className="mobile-social-links">
              <p>Acessos rápidos</p>
              <a className="mobile-social-linkedin" href={siteConfig.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <SocialIcon name="linkedin" size={17} /><span>LinkedIn</span><i aria-hidden="true">↗</i>
              </a>
              <a className="mobile-social-github" href={siteConfig.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <SocialIcon name="github" size={17} /><span>GitHub</span><i aria-hidden="true">↗</i>
              </a>
              <a className="mobile-social-whatsapp" href={siteConfig.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <SocialIcon name="whatsapp" size={17} /><span>WhatsApp</span><i aria-hidden="true">↗</i>
              </a>
              <a className="mobile-social-email" href={`mailto:${siteConfig.email}?subject=Contato pelo portfólio`} onClick={() => setOpen(false)}>
                <SocialIcon name="email" size={17} /><span>E-mail</span><i aria-hidden="true">↗</i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
