import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leonardo Dariva — Front-end Developer",
    short_name: "Leonardo Dariva",
    description: "Portfolio profissional de Leonardo Dariva.",
    start_url: "/",
    display: "standalone",
    background_color: "#03040d",
    theme_color: "#377bff",
  };
}
