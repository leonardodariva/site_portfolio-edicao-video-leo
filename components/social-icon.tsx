import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import type { IconType } from "react-icons";

type SocialIconName = "linkedin" | "github" | "whatsapp" | "email";

type SocialIconProps = {
  name: SocialIconName;
  size?: number;
};

const icons: Record<SocialIconName, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  email: SiGmail,
};

export function SocialIcon({ name, size = 18 }: SocialIconProps) {
  const Icon = icons[name];

  return <Icon size={size} aria-hidden="true" focusable="false" />;
}
