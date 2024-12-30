"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RecipeCard(props: any) {
  const router = useRouter();

  return (
    <li>
      <h2>{props.name}</h2>
      <Image src={props.image} alt="food" width={100} height={100} />
      <div>
        <p>
          <strong>Prep Time:</strong> {props.prepTimeMinutes} minutes
        </p>
        <p>
          <strong>Cook Time:</strong> {props.cookTimeMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {props.servings}
        </p>
        <p>
          <strong>Difficulty:</strong> {props.difficulty}
        </p>
        <p>
          <strong>Cuisine:</strong> {props.cuisine}
        </p>
        <p>
          <strong>Calories per Serving:</strong> {props.caloriesPerServing}
        </p>
        <p>
          <strong>Rating:</strong> {props.rating} ({props.reviewCount} reviews)
        </p>
        <p>
          <strong>Meal Type:</strong> {props.mealType.join(", ")}
        </p>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {props.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol>
      <div>
        {props.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <br />
      <button onClick={() => router.push(`/recipes/${props.id}`)}>View</button>
    </li>
  );
}

export default RecipeCard;
