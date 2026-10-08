import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BEST KidSbooks Shop",
    short_name: "BEST KidSbooks",
    description:
      "Picture books, free phonics printables, keepsake family journals, and AAP-backed parent calculators.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf9",
    theme_color: "#ff3b1f",
    icons: [
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
