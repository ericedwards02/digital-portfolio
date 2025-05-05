import { icons } from "./icons";

export const Socials = () => {
  return (
    <div
      id="links"
      className="flex lg:flex-col not-lg:flex-row place-items-end gap-3 text-ctp-subtext1 p-3"
    >
      <a
        href="https://github.com/ericedwards02"
        className="inline-flex gap-1 hover:text-neutral-800 cursor-default"
      >
        {icons.github} GitHub
      </a>
      <a
        href="https://linkedin.com/in/ericedwards02"
        className="inline-flex gap-1 hover:text-neutral-800 cursor-default"
      >
        {icons.linkedin} LinkedIn
      </a>
      <a
        href="/resume.pdf"
        className="inline-flex gap-1 hover:text-neutral-800 cursor-default"
      >
        {icons.resume}
        Resume
      </a>
    </div>
  );
};
