import RecipeCard from "../recipe-card";

type PropsType = { params: Promise<{ id: string }> };

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();

  return <RecipeCard key={crypto.randomUUID()} {...data} />;
}
