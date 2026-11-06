import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks } from "@/data/navigation";

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
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
