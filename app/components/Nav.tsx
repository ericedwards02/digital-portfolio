"use client";

import { Dispatch, SetStateAction } from "react";
import { posts, Post } from "../data/posts";

interface NavProps {
  setActivePostAction: Dispatch<SetStateAction<Post>>;
}

function formatTitleIndex(index: number): string {
  if (index < 0 || index > 10) {
    return String(index);
  }
  return "0" + String(index);
}

export default function Nav({ setActivePostAction }: NavProps) {
  return (
    <ul className="list-none not-lg:self-center p-0 m-0 w-[200px]">
      <li className="text-lg font-bold">portfolio</li>
      {posts.map((post, index) => (
        <li
          key={post.id}
          onClick={() => setActivePostAction(post)}
          className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-peach"
        >
          {formatTitleIndex(index)} {post.title}
        </li>
      ))}
    </ul>
  );
}
