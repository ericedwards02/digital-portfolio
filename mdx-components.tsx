import type { MDXComponents } from "mdx/types";
import { TechnologiesBanner } from "./app/components/TechnologiesBanner";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    TechnologiesBanner: ({ technologies }) => (
      <TechnologiesBanner technologies={technologies} />
    ),
    ...components,
  };
}
