import PostCard from "./post-card";

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
