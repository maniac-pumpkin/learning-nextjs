import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PostCard = dynamic(() => import("./post-card"));

export const metadata: Metadata = {
  title: "Posts",
  description: "View all posts",
};

export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return (
    <ul>
      {data.posts.map((each: any) => (
        <PostCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}
