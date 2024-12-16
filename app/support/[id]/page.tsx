type PropsType = { params: Promise<{ id: string }> };

export default async function SupportPage({ params }: PropsType) {
  const { id } = await params;

  return <p>Admin id: {id}</p>;
}
