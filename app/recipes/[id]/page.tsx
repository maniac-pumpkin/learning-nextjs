import type { Metadata } from "next";
import dynamic from "next/dynamic";

const RecipeCard = dynamic(() => import("../recipe-card"));

type PropsType = { params: Promise<{ id: string }> };

export const generateMetadata = async ({
  params,
}: PropsType): Promise<Metadata> => {
  const { id } = await params;

  return {
    title: `Recipe ${id}`,
    description: `Details about recipe number ${id}. Read more about this recipe.`,
  };
};

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();

  return <RecipeCard key={crypto.randomUUID()} {...data} />;
}
