"use client";
import { blogRoutes, portfolioRoutes } from "@/data/post-routes";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { icons } from "./icons";

function formatTitleIndex(index: number): string {
  if (index < 0 || index > 10) {
    return index.toString();
  }
  return "0" + index.toString();
}

function MobileNav({
  isHidden,
  toggle,
}: {
  isHidden: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={() => toggle(!isHidden)}
        className="flex flex-row align-middle text-3xl"
      >
        {pathname.split("/")[pathname.split("/").length - 1]}{" "}
        <span className="place-self-center">
          {isHidden ? icons.ChevronUp : icons.ChevronDown}
        </span>
      </button>
    </>
  );
}

export default function Nav() {
  const [isHidden, setHidden] = useState(false);
  const toggleHidden = () => setHidden(!isHidden);

  return (
    <>
      <ul
        className="flex flex-col list-none p-0 m-0 w-[200px] not-lg:place-self-center"
        hidden={isHidden}
      >
        <li className="text-lg font-semibold">portfolio</li>
        {portfolioRoutes.map((route, index) => (
          <Link
            key={index}
            href={`${route.href}`}
            className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-red focus:text-xl focus:font-bold focus:text-ctp-red"
          >
            {formatTitleIndex(index)} {route.label}
          </Link>
        ))}
        <li className="text-lg font-semibold">blogs & extras</li>
        {blogRoutes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-red focus:text-xl focus:font-bold focus:text-ctp-red"
          >
            {formatTitleIndex(index + portfolioRoutes.length)} {route.label}
          </Link>
        ))}
      </ul>
      <div className="lg:hidden flex justify-around pb-2">
        <MobileNav isHidden={isHidden} toggle={toggleHidden} />
      </div>
    </>
  );
}
