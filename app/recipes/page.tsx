import type { Metadata } from "next";
import dynamic from "next/dynamic";

const RecipeCard = dynamic(() => import("./recipe-card"));

export const metadata: Metadata = {
  title: "Recipes",
  description: "Browse our recipes collection",
};

export default async function Page() {
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
