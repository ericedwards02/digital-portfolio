import { icons } from "./icons";

export default function GithubLink(props: { link: string }) {
  return (
    <div id="project-link">
      <a href={props.link} className="inline-flex gap-1 font-mono">
        {icons.github} Link to GitHub
      </a>
    </div>
  );
}
