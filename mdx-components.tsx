import type { MDXComponents } from "mdx/types";
import { TechnologiesBanner } from "@/components/technologies-banner";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    TechnologiesBanner: ({ technologies }) => (
      <TechnologiesBanner technologies={technologies} />
    ),
    ...components,
  };
}
