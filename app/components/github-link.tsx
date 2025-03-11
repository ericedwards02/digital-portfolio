import { icons } from "./icons";

export default function GithubLink(props: { link: string; text?: string }) {
  return (
    <div
      id="project-link"
      className="bg-ctp-mantle size-fit px-3 py-1 flex transform transition duration-125 hover:scale-90 rounded-md"
    >
      <a
        href={props.link}
        className="inline-flex gap-1 font-mono place-self-center"
      >
        {icons.github} {props.text}
      </a>
    </div>
  );
}
