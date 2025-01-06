import { posts } from "@/app/api/data-obj";

type PropsType = { params: Promise<{ id: string }> };

export async function GET(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const availablePost = posts.find((each) => each.id === +id);

  if (!availablePost) return new Response("Post not found.", { status: 404 });

  return Response.json(availablePost, { status: 200 });
}

export async function PATCH(request: Request, { params }: PropsType) {
  const { id: postId } = await params;

  const postIndex = posts.findIndex(({ id }) => id === +postId);

  if (postIndex === -1) return new Response("Post not found", { status: 404 });

  const updatedData = await request.json();

  updatedData.id = +postId;

  posts.splice(postIndex, 1);
  posts.push(updatedData);

  return Response.json(posts[postIndex], { status: 200 });
}

export async function DELETE(_: unknown, { params }: PropsType) {
  const { id } = await params;

  const postIndex = posts.findIndex((each) => each.id === +id);

  if (postIndex === -1) return new Response("Post not found", { status: 404 });

  posts.splice(postIndex, 1);

  return new Response("Post deleted successfully", { status: 200 });
}
