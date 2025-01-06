import { Metadata } from "next";
import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("./user-card"));

export const metadata: Metadata = {
  title: "Users",
  description: "User profiles",
};

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  return (
    <ul>
      {data.map((each: any) => (
        <UserCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}
