"use client";

type PropsType = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: PropsType) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
