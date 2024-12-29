import UserCard from "@/app/users/user-card";

type PropsType = { params: Promise<{ id: string }> };

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();

  return <UserCard key={crypto.randomUUID()} {...data} />;
}
