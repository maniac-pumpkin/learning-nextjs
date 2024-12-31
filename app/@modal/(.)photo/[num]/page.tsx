import { notFound } from "next/navigation";
import Image from "next/image";

import { imgs } from "@/app/photo/img-group";

type PropsType = { params: Promise<{ num: string }> };

export default async function Page({ params }: PropsType) {
  const { num } = await params;

  const availableImg = imgs.find(({ id }) => id === +num);

  if (!availableImg) notFound();

  return (
    <dialog style={{ backgroundColor: "black", color: "white" }} open>
      <h1>Image number: {num}</h1>
      <Image src={availableImg.src} alt="image" width={100} height={100} />
      <br />
      <a href={availableImg.src} download="image">
        Download
      </a>
    </dialog>
  );
}
