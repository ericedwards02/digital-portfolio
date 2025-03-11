"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import ContentSection from "./components/ContentSection";
import { portfolio_posts } from "./data/posts";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [activePost, setActivePostAction] = useState(portfolio_posts[0]);

  return (
    <>
      <Analytics />
      <div id="document" className="font-sans max-w-[1600px] mx-auto p-5">
        <h1 className="mb-0 text-center font-bold text-xl font-mono">
          <span className="text-ctp-green">Eric Edwards</span> &mdash;
          <span className="text-ctp-flamingo"> dev and design portfolio</span>
        </h1>
        <h2 className="mt-0 text-center text-lg text-ctp-subtext1 lg:m-3">
          &quot;Next time is next time, now is now!&quot;
          <i> - Hirayama (Perfect Days, 2023)</i>
        </h2>
        <div className="flex lg:flex-row not-lg:flex-col justify-center">
          <Nav setActivePostAction={setActivePostAction} />
          <ContentSection activePost={activePost} />
        </div>
      </div>
    </>
  );
}
