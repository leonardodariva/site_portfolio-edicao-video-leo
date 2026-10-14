import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CursorExperience } from "@/components/cursor-experience";
import { siteConfig } from "@/data/site";
import { faktum, sfProText } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Leonardo Dariva — Front-end Developer",
    template: "%s — Leonardo Dariva",
  },
  description: siteConfig.description,
  keywords: [
    "Leonardo Dariva",
    "Front-end Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Desenvolvedor Front-end",
  ],
  authors: [{ name: "Leonardo Dariva", url: siteConfig.url }],
  creator: "Leonardo Dariva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: "Leonardo Dariva — Portfolio",
    title: "Leonardo Dariva — Front-end Developer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Dariva — Front-end Developer",
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03040d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${faktum.variable} ${sfProText.variable}`}>
      <body>
        <CursorExperience />
        {children}
      </body>
    </html>
  );
}
