"use client";
import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Astro",
    link: "https://astro.build/",
    thumbnail:
      "/astro.svg",
  },
  {
    title: "Dart",
    link: "https://dart.dev/",
    thumbnail:
      "/dart.svg",
  },
  {
    title: "Flutter",
    link: "https://flutter.dev/",
    thumbnail:
      "/flutter.svg",
  },

  {
    title: "Go",
    link: "https://go.dev/",
    thumbnail:
      "/go.svg",
  },
  {
    title: "GSAP",
    link: "https://gsap.com/",
    thumbnail:
      "/gsap.svg",
  },
  {
    title: "Next",
    link: "https://nextjs.org/",
    thumbnail:
      "/Next.svg",
  },

  {
    title: "JavaScript",
    link: "https://javascript.info/",
    thumbnail:
      "/js.svg",
  },
  {
    title: "Node",
    link: "https://nodejs.org/",
    thumbnail:
      "/node.svg",
  },
  {
    title: "Nuxt",
    link: "https://nuxt.com/",
    thumbnail:
      "/nuxt.svg",
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    thumbnail:
      "/python.svg",
  },
  {
    title: "React",
    link: "https://react.dev/",
    thumbnail:
      "/react.svg",
  },

  {
    title: "Svelte",
    link: "https://svelte.dev/",
    thumbnail:
      "/svelte.svg",
  },
  {
    title: "Three",
    link: "https://threejs.org/",
    thumbnail:
      "/three.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    thumbnail:
      "/ts.svg",
  },
  {
    title: "Rust",
    link: "https://www.rust-lang.org/",
    thumbnail:
      "/rust.svg",
  },
];
