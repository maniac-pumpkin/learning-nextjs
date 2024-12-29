import { Suspense } from "react";

import UserCard from "./users/user-card";
import RecipeCard from "./recipes/recipe-card";
import PostCard from "./posts/post-card";

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
