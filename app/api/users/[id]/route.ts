import { users } from "@/app/api/data-obj";

type PropsType = { params: Promise<{ id: string }> };

export async function GET(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const availableUser = users.find((each) => each.id === +id);

  if (!availableUser) return new Response("Post not found.", { status: 404 });

  return Response.json(availableUser, { status: 200 });
}

export async function PATCH(request: Request, { params }: PropsType) {
  const { id: userId } = await params;

  const userIndex = users.findIndex(({ id }) => id === +userId);

  if (userIndex === -1) return new Response("Post not found", { status: 404 });

  const updatedData = await request.json();

  updatedData.id = +userId;

  users.splice(userIndex, 1);
  users.push(updatedData);

  return Response.json(users[userIndex], { status: 200 });
}

export async function DELETE(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const userIndex = users.findIndex((each) => each.id === +id);

  if (userIndex === -1) return new Response("Post not found", { status: 404 });

  users.splice(userIndex, 1);

  return new Response("Post deleted successfully", { status: 200 });
}
