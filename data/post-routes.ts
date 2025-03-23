export interface PostRoute {
  href: string;
  label: string;
}

export const portfolioRoutes: PostRoute[] = [
  {
    href: "/portfolio/about",
    label: "about me",
  },
  {
    href: "/portfolio/experience",
    label: "experience",
  },
  {
    href: "/portfolio/statistik",
    label: "statistik",
  },
  {
    href: "/portfolio/media-mind",
    label: "media mind",
  },
  {
    href: "/portfolio/tstat",
    label: "tstat",
  },
];

export const blogRoutes: PostRoute[] = [
  {
    href: "/blog/3-22-25",
    label: "32225",
  },
];
