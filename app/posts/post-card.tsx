"use client";

import { useRouter } from "next/navigation";

function PostCard(props: any) {
  const router = useRouter();

  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <div>
        <p>
          <strong>Views:</strong> {props.views}
        </p>
        <p>
          <strong>Likes:</strong> {props.likes}
        </p>
        <p>
          <strong>Dislikes:</strong> {props.dislikes}
        </p>
        <p>
          <strong>User ID:</strong> {props.userId}
        </p>
      </div>
      <h3>Tags</h3>
      <p>{props.tags}</p>
      <br />
      <button onClick={() => router.push(`/posts/${props.id}`)}>View</button>
    </li>
  );
}

export default PostCard;
