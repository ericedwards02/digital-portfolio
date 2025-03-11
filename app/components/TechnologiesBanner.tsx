"use client";

import { icons, Icon } from "./icons";

interface TechnologiesBannerProps {
  technologies: Array<Icon>;
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
                <div className="place-self-center">{icons[t]}</div>
                <li className="list-none px-1 font-mono">
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
