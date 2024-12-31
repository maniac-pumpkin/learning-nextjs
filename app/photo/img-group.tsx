import Image from "next/image";
import Link from "next/link";

export const imgs = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `http://localhost:3000/img-${i + 1}.svg`,
}));

function ImgGroup() {
  return (
    <ul style={{ maxWidth: "350px" }}>
      {imgs.map(({ src, id }) => (
        <Link key={id} href={`/photo/${id}`}>
          <Image src={src} alt="image" width={100} height={100} />
        </Link>
      ))}
    </ul>
  );
}

export default ImgGroup;
