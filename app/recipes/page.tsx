import RecipeCard from "./recipe-card";

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
