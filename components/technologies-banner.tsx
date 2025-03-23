"use client";

import React from "react";
import { icons } from "./icons";

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
          {technologies.map((t: string, index) => {
            return (
              <div className="inline-flex" key={index}>
                <div className="place-self-center">{icons[t]}</div>
                <li className="list-none px-1 font-mono">
                  {t}
                  {index !== technologies.length - 1 && " "}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};
