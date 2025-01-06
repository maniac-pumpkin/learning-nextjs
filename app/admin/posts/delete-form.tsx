import Form from "next/form";

const onSubmission = async (fd: FormData) => {
  "use server";

  const data = Object.fromEntries(fd.entries());

  const response = await fetch(`http://localhost:3000/api/posts/${data.id}`, {
    method: "DELETE",
  });

  console.log(response.ok);
};

function DeleteForm() {
  return (
    <Form action={onSubmission}>
      <label htmlFor="id">Id:</label>
      <input type="number" id="id" name="id" required />
      <br />
      <button type="submit">Submit post</button>
    </Form>
  );
}

export default DeleteForm;
