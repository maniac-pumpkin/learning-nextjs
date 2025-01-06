import { recipes } from "@/app/api/data-obj";

type PropsType = { params: Promise<{ id: string }> };

export async function GET(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const availableRecipe = recipes.find((each) => each.id === +id);

  if (!availableRecipe) return new Response("Post not found.", { status: 404 });

  return Response.json(availableRecipe, { status: 200 });
}

export async function PATCH(request: Request, { params }: PropsType) {
  const { id: recipeId } = await params;

  const recipeIndex = recipes.findIndex(({ id }) => id === +recipeId);

  if (recipeIndex === -1)
    return new Response("Post not found", { status: 404 });

  const updatedData = await request.json();

  updatedData.id = +recipeId;

  recipes.splice(recipeIndex, 1);
  recipes.push(updatedData);

  return Response.json(recipes[recipeIndex], { status: 200 });
}

export async function DELETE(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const recipeIndex = recipes.findIndex((each) => each.id === +id);

  if (recipeIndex === -1)
    return new Response("Post not found", { status: 404 });

  recipes.splice(recipeIndex, 1);

  return new Response("Post deleted successfully", { status: 200 });
}
