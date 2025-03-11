"use client";

import { Dispatch, SetStateAction } from "react";
import { blog_posts, portfolio_posts, Post } from "../data/posts";

interface NavProps {
  setActivePostAction: Dispatch<SetStateAction<Post>>;
}

function formatTitleIndex(index: number): string {
  if (index < 0 || index > 10) {
    return index.toString();
  }
  return "0" + index.toString();
}

export default function Nav({ setActivePostAction }: NavProps) {
  return (
    <ul className="list-none not-lg:self-center p-0 m-0 w-[200px]">
      <li className="text-lg font-mono">portfolio</li>
      {portfolio_posts.map((post, index) => (
        <li
          key={post.id}
          onClick={() => setActivePostAction(post)}
          tabIndex={index}
          className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-peach focus:text-xl focus:font-bold focus:text-ctp-peach"
        >
          {formatTitleIndex(index)} {post.title}
        </li>
      ))}
      <li className="text-lg font-bold">blogs & extras</li>
      {blog_posts.map((post, index) => (
        <li
          key={post.id}
          onClick={() => setActivePostAction(post)}
          tabIndex={portfolio_posts.length + index}
          className="text-lg text-gray-500 transition-all duration-250 cursor-pointer mb-2.5 hover:text-xl hover:font-bold hover:text-ctp-peach focus:text-xl focus:font-bold focus:text-ctp-peach"
        >
          {formatTitleIndex(index + portfolio_posts.length)} {post.title}
        </li>
      ))}
    </ul>
  );
}
