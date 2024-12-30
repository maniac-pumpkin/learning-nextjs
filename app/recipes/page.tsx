import type { Metadata } from "next";
import dynamic from "next/dynamic";

const RecipeCard = dynamic(() => import("./recipe-card"));

export const metadata: Metadata = {
  title: "Recipes",
  description: "Browse our recipes collection",
};

export default async function Page() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  return (
    <ul>
      {data.recipes.map((each: any) => (
        <RecipeCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}
