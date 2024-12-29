import UserCard from "./user-card";

export default async function Page() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  return (
    <ul>
      {data.users.map((each: any) => (
        <UserCard key={crypto.randomUUID()} {...each} />
      ))}
    </ul>
  );
}
