"use client";

import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UserCard(props: any) {
  const router = useRouter();

  return (
    <li>
      <h2>{props.name}</h2>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <strong>Phone:</strong> {props.phone}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>Gender:</strong> {props.gender}
      </p>
      <p>
        <strong>Height:</strong> {props.height} cm
      </p>
      <p>
        <strong>Weight:</strong> {props.weight} kg
      </p>
      <p>
        <strong>Birth Date:</strong> {props.birthDate}
      </p>
      <h3>Address</h3>
      <p>{props.address}</p>
      <h3>Company</h3>
      <p>{props.company}</p>
      <h3>Financial Information</h3>
      <p>
        <strong>Card info:</strong> {props.bank}
      </p>
      <p>
        <strong>Crypto: {props.crypto}</strong>
      </p>
      <button onClick={() => router.push(`/users/${props.id}`)}>View</button>
    </li>
  );
}

export default UserCard;
