import ImgGroup from "./photo/img-group";

export default function Index() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Image gallery</h1>
      <ImgGroup />
    </section>
  );
}
