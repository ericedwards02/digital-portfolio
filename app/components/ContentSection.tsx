import Undefined from "../posts/Undefined.mdx";
import { Post as PostData } from "../data/posts";
import { useState, useEffect } from "react";

interface ContentSectionProps {
  activePost: PostData;
}

export default function ContentSection({ activePost }: ContentSectionProps) {
  const [post, setPost] = useState();

  useEffect(() => {
    import(`../posts/${activePost.id}.mdx`)
      .then((post) => {
        setPost(post.default);
        console.log("Set post.");
      })
      .catch((err) => {
        console.log(err);
        setPost(undefined);
      });
  }, [activePost]);

  return (
    <div className="lg:max-w-prose lg:w-[80ch] justify-self-center">
      <h2 className="text-2xl font-bold">{activePost.title}</h2>
      {post ? post : <Undefined />}
    </div>
  );
}
