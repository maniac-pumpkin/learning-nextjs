import { users } from "../data-obj";

export function GET() {
  return Response.json(users, { status: 200 });
}

export async function POST(request: Request) {
  const newUser = await request.json();

  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;

  users.push(newUser);

  return Response.json(newUser, { status: 201 });
}
