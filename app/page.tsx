import { Suspense } from "react";
import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("./users/user-card"));
const RecipeCard = dynamic(() => import("./recipes/recipe-card"));
const PostCard = dynamic(() => import("./posts/post-card"));

async function Users() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  return (
    <ul>
      {data.map((each: any) => (
        <UserCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}

async function Recipes() {
  const response = await fetch("http://localhost:3000/api/recipes");
  const data = await response.json();

  return (
    <ul>
      {data.map((each: any) => (
        <RecipeCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}

async function Posts() {
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

export default function Index() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Users />
      </Suspense>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Recipes />
      </Suspense>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Posts />
      </Suspense>
    </>
  );
}
