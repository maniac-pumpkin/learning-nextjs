import PostCard from "../post-card";

type PropsType = { params: Promise<{ id: string }> };

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json();

  return <PostCard key={crypto.randomUUID()} {...data} />;
}
