import { posts } from "../data-obj";

export function GET() {
  return Response.json(posts, { status: 200 });
}

export async function POST(request: Request) {
  const newPost = await request.json();

  newPost.id = posts.length ? posts[posts.length - 1].id + 1 : 1;

  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}
