import { Suspense } from "react";
import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("./users/user-card"));
const RecipeCard = dynamic(() => import("./recipes/recipe-card"));
const PostCard = dynamic(() => import("./posts/post-card"));

async function Users() {
  const response = await fetch("https://dummyjson.com/users?limit=3");
  const data = await response.json();

  return (
    <ul>
      {data.users.map((each: any) => (
        <UserCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}

async function Recipes() {
  const response = await fetch("https://dummyjson.com/recipes?limit=3");
  const data = await response.json();

  return (
    <ul>
      {data.recipes.map((each: any) => (
        <RecipeCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}

async function Posts() {
  const response = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await response.json();

  return (
    <ul>
      {data.posts.map((each: any) => (
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
