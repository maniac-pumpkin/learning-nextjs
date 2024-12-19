import { notFound } from "next/navigation";

type PropsType = { params: Promise<{ product: string }> };

const productIds = Array.from({ length: 10 }, (_, i) => i + 1);

export default async function ProductPage({ params }: PropsType) {
  const { product } = await params;

  if (!productIds.includes(+product)) notFound();

  return (
    <div>
      <h1>Product id: {product}</h1>
      <p>
        <strong>Description:</strong>
        <br />
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, quia! A
          nisi debitis neque possimus amet in.
        </span>
      </p>
    </div>
  );
}
