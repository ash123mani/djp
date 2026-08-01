import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Majboor Janta",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F4EBD7",
    theme_color: "#F4EBD7",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
