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
          <strong>Likes:</strong> {props.reactions.likes}
        </p>
        <p>
          <strong>Dislikes:</strong> {props.reactions.dislikes}
        </p>
        <p>
          <strong>User ID:</strong> {props.userId}
        </p>
      </div>
      <h3>Tags</h3>
      <div>
        {props.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <br />
      <button onClick={() => router.push(`/posts/${props.id}`)}>View</button>
    </li>
  );
}

export default PostCard;
