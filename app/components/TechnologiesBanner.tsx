import { Icon } from "@iconify/react";

interface TechnologiesBannerProps {
  technologies: Array<string>;
}

export const TechnologiesBanner = ({
  technologies,
}: TechnologiesBannerProps) => {
  return (
    <>
      {" "}
      {technologies && (
        <ul>
          {technologies.map((t, index) => {
            return (
              <div className="inline-flex" key={index}>
                <Icon className="place-self-center" icon={`catppuccin:${t}`} />
                <li className="list-none px-1 font-bold">
                  {t}
                  {index !== technologies.length - 1 && ","}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};
