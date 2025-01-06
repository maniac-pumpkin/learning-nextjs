import Form from "next/form";

const onSubmission = async (fd: FormData) => {
  "use server";

  const data = Object.fromEntries(fd.entries());

  const response = await fetch(`http://localhost:3000/api/recipes/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

  console.log(response.ok);
};

function PatchForm() {
  return (
    <Form action={onSubmission}>
      <label htmlFor="id">Id:</label>
      <input type="number" id="id" name="id" required />
      <br />

      <label htmlFor="name">Recipe Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue="Classic Margherita Pizza"
        required
      />
      <br />

      <label htmlFor="cuisine">Cuisine:</label>
      <input
        type="text"
        id="cuisine"
        name="cuisine"
        defaultValue="Italian"
        required
      />
      <br />

      <label htmlFor="difficulty">Difficulty:</label>
      <input
        type="text"
        id="difficulty"
        name="difficulty"
        defaultValue="Easy"
        required
      />
      <br />

      <label htmlFor="prepTimeMinutes">Prep Time (minutes):</label>
      <input
        type="number"
        id="prepTimeMinutes"
        name="prepTimeMinutes"
        defaultValue="20"
        required
      />
      <br />

      <label htmlFor="cookTimeMinutes">Cook Time (minutes):</label>
      <input
        type="number"
        id="cookTimeMinutes"
        name="cookTimeMinutes"
        defaultValue="15"
        required
      />
      <br />

      <label htmlFor="servings">Number of Servings:</label>
      <input
        type="number"
        id="servings"
        name="servings"
        defaultValue="4"
        required
      />
      <br />

      <label htmlFor="caloriesPerServing">Calories Per Serving:</label>
      <input
        type="number"
        id="caloriesPerServing"
        name="caloriesPerServing"
        defaultValue="300"
        required
      />
      <br />

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        name="ingredients"
        defaultValue="blah blah blah"
        required
      />
      <br />

      <label htmlFor="instructions">Instructions:</label>
      <textarea
        id="instructions"
        name="instructions"
        defaultValue="blah blah blah"
        required
      />
      <br />

      <label htmlFor="mealType">Meal Type:</label>
      <input
        type="text"
        id="mealType"
        name="mealType"
        defaultValue="Dinner"
        required
      />
      <br />

      <label htmlFor="tags">Tags:</label>
      <input
        type="text"
        id="tags"
        name="tags"
        defaultValue="Pizza, Italian"
        required
      />
      <br />

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        step="0.1"
        defaultValue="4.6"
        required
      />
      <br />

      <label htmlFor="reviewCount">Review Count:</label>
      <input
        type="number"
        id="reviewCount"
        name="reviewCount"
        defaultValue="98"
        required
      />
      <br />

      <label htmlFor="userId">User ID:</label>
      <input
        type="number"
        id="userId"
        name="userId"
        defaultValue="166"
        required
      />
      <br />

      <label htmlFor="image">Image URL:</label>
      <input
        type="url"
        id="image"
        name="image"
        defaultValue="https://cdn.dummyjson.com/recipe-images/1.webp"
        required
      />
      <br />

      <button type="submit">Submit recipe</button>
    </Form>
  );
}

export default PatchForm;
