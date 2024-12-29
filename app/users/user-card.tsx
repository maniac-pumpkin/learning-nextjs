"use client";

import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UserCard(props: any) {
  const router = useRouter();

  return (
    <li>
      <h2>{`${props.firstName} ${props.lastName}`}</h2>
      <p>
        <strong>Username:</strong> {props.username}
      </p>
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
        <strong>Eye Color:</strong> {props.eyeColor}
      </p>
      <p>
        <strong>Hair Color:</strong> {props.hair.color}
      </p>
      <h3>Address</h3>
      <p>{`${props.address.address}, ${props.address.city}, ${props.address.state}, ${props.address.postalCode}, ${props.address.country}`}</p>
      <h3>Company</h3>
      <p>
        <strong>Name:</strong> {props.company.name}
      </p>
      <p>
        <strong>Title:</strong> {props.company.title}
      </p>
      <h3>Bank Information</h3>
      <p>
        <strong>Card Type:</strong> {props.bank.cardType}
      </p>
      <p>
        <strong>Card Number:</strong> **** **** ****
        {props.bank.cardNumber.slice(-4)}
      </p>
      <h3>Crypto Wallet</h3>
      <p>
        <strong>{props.crypto.coin} Wallet:</strong> {props.crypto.wallet}
      </p>
      <button onClick={() => router.push(`/users/${props.id}`)}>View</button>
    </li>
  );
}

export default UserCard;
