import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const PostCard = dynamic(() => import("../post-card"));

type PropsType = { params: Promise<{ id: string }> };

export const generateMetadata = async ({
  params,
}: PropsType): Promise<Metadata> => {
  const { id } = await params;

  return {
    title: `Post ${id}`,
    description: `Details about post number ${id}. Read more about this post.`,
  };
};

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!response.ok) notFound();

  const data = await response.json();

  return <PostCard key={crypto.randomUUID()} {...data} />;
}
