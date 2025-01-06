import Form from "next/form";

const onSubmission = async (fd: FormData) => {
  "use server";

  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(fd.entries())),
  });

  console.log(response.ok);
};

function PostForm() {
  return (
    <Form action={onSubmission}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue="blah blah blah"
        required
      />
      <br />

      <label htmlFor="body">Content:</label>
      <textarea id="body" name="body" defaultValue="blah blah blah" required />
      <br />

      <label htmlFor="tags">Tags:</label>
      <input
        type="text"
        id="tags"
        name="tags"
        defaultValue="blah blah blah"
        required
      />
      <br />

      <label htmlFor="userId">User ID:</label>
      <input
        type="number"
        id="userId"
        name="userId"
        defaultValue="121"
        required
      />
      <br />

      <label htmlFor="likes">Likes:</label>
      <input
        type="number"
        id="likes"
        name="likes"
        defaultValue="192"
        required
      />
      <br />

      <label htmlFor="dislikes">Dislikes:</label>
      <input
        type="number"
        id="dislikes"
        name="dislikes"
        defaultValue="25"
        required
      />
      <br />

      <label htmlFor="views">Views:</label>
      <input
        type="number"
        id="views"
        name="views"
        defaultValue="305"
        required
      />
      <br />

      <button type="submit">Submit post</button>
    </Form>
  );
}

export default PostForm;
