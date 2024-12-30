import type { Metadata } from "next";
import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("../user-card"));

type PropsType = { params: Promise<{ id: string }> };

export const generateMetadata = async ({
  params,
}: PropsType): Promise<Metadata> => {
  const { id } = await params;

  return {
    title: `User ${id}`,
    description: `Details about user number ${id}. Read more about this user.`,
  };
};

export default async function Page({ params }: PropsType) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();

  return <UserCard key={crypto.randomUUID()} {...data} />;
}
