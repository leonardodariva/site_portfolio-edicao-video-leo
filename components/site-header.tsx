import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { SocialIcon } from "@/components/social-icon";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="monogram" href="/" aria-label="Leonardo Dariva — início">
          <Image className="brand-mark" src="/brand/leonardo-dariva.svg" alt="" width={40} height={40} priority />
        </Link>
        <div className="header-right">
          <nav className="desktop-navigation" aria-label="Navegação principal">
            {navigationLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <nav className="header-socials" aria-label="Redes sociais">
            <a className="header-social-linkedin" href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon name="linkedin" size={16} />
            </a>
            <a className="header-social-github" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SocialIcon name="github" size={17} />
            </a>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
