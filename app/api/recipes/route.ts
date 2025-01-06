import { recipes } from "../data-obj";

export function GET() {
  return Response.json(recipes, { status: 200 });
}

export async function POST(request: Request) {
  const newRecipe = await request.json();

  newRecipe.id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;

  recipes.push(newRecipe);

  return Response.json(newRecipe, { status: 201 });
}
