import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leonardo Dariva — Editor de vídeo",
    short_name: "Leonardo Dariva",
    description: "Portfólio audiovisual e de edição de vídeo de Leonardo Dariva.",
    start_url: "/",
    display: "standalone",
    background_color: "#03040d",
    theme_color: "#377bff",
  };
}
