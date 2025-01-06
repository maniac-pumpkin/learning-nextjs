import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PostCard = dynamic(() => import("./post-card"));

export const metadata: Metadata = {
  title: "Posts",
  description: "View all posts",
};

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();

  return (
    <ul>
      {data.map((each: any) => (
        <PostCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}
