import Form from "next/form";

const onSubmission = async (fd: FormData) => {
  "use server";

  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(fd.entries())),
  });

  console.log(response.ok);
};

function PostForm() {
  return (
    <Form action={onSubmission}>
      <label htmlFor="name">Full Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue="John Smith"
        required
      />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" defaultValue="34" required />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        defaultValue="john.smith@x.dummyjson.com"
        required
      />
      <br />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        defaultValue="+44 756-231-8901"
        required
      />
      <br />

      <label htmlFor="address">Full Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        defaultValue="123 Elm Street, London, LDN, W1A 1AA, UK"
        required
      />
      <br />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" defaultValue="male" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />

      <label htmlFor="birthDate">Birth Date:</label>
      <input
        type="date"
        id="birthDate"
        name="birthDate"
        defaultValue="1989-07-15"
        required
      />
      <br />

      <label htmlFor="height">Height (cm):</label>
      <input
        type="number"
        step="0.01"
        id="height"
        name="height"
        defaultValue="180.12"
        required
      />
      <br />

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        step="0.01"
        id="weight"
        name="weight"
        defaultValue="75.5"
        required
      />
      <br />

      <label htmlFor="company">Company Details:</label>
      <input
        type="text"
        id="company"
        name="company"
        defaultValue="Smith Enterprises, Marketing, Project Manager"
        required
      />
      <br />

      <label htmlFor="bank">Bank Details:</label>
      <input
        type="text"
        id="bank"
        name="bank"
        defaultValue="Visa, 4916555467891234, 05/28, GBP"
        required
      />
      <br />

      <label htmlFor="crypto">Crypto Details:</label>
      <input
        type="text"
        id="crypto"
        name="crypto"
        defaultValue="Ethereum, Binance Smart Chain, 0x1d92f68b1e2c8398ef7b8b24f3cfc918a3f4e78c"
        required
      />
      <br />

      <button type="submit">Submit user</button>
    </Form>
  );
}

export default PostForm;
