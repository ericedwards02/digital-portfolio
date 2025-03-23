"use client";
import { blogRoutes, portfolioRoutes } from "@/data/post-routes";
import Link from "next/link";

function formatTitleIndex(index: number): string {
  if (index < 0 || index > 10) {
    return index.toString();
  }
  return "0" + index.toString();
}

export default function Nav() {
  return (
    <ul className="flex flex-col list-none not-lg:hidden p-0 m-0 w-[200px]">
      <li className="text-lg font-semibold">portfolio</li>
      {portfolioRoutes.map((route, index) => (
        <Link
          key={index}
          href={`${route.href}`}
          className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-peach focus:text-xl focus:font-bold focus:text-ctp-peach"
        >
          {formatTitleIndex(index)} {route.label}
        </Link>
      ))}
      <li className="text-lg font-semibold">blogs & extras</li>
      {blogRoutes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-peach focus:text-xl focus:font-bold focus:text-ctp-peach"
        >
          {formatTitleIndex(index + portfolioRoutes.length)} {route.label}
        </Link>
      ))}
    </ul>
  );
}
