"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import ContentSection from "./components/ContentSection";
import { posts } from "./data/posts";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [activePost, setActivePost] = useState(posts[0]);

  return (
    <>
      <Analytics />
      <div className="font-sans max-w-[1600px] mx-auto p-5">
        <h1 className="mb-0 text-center font-bold text-xl">
          Eric Edwards &mdash; dev and design
        </h1>
        <h2 className="mt-0 text-center text-lg">
          &quot;Next time is next time, now is now!&quot;
          <i> - Hirayama (Perfect Days, 2023)</i>
        </h2>
        <div className="flex gap-10">
          <Nav setActivePost={setActivePost} />
          <ContentSection activePost={activePost} />
        </div>
      </div>
    </>
  );
}
