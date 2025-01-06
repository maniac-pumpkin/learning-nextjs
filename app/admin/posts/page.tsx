import PostForm from "./post-form";
import PatchForm from "./patch-form";
import DeleteForm from "./delete-form";

export default function Page() {
  return (
    <>
      <details>
        <summary>Post</summary>
        <PostForm />
      </details>
      <details>
        <summary>Patch</summary>
        <PatchForm />
      </details>
      <details>
        <summary>Delete</summary>
        <DeleteForm />
      </details>
    </>
  );
}
