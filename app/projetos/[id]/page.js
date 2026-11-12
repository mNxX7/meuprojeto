import DetalheProjeto from "@/componentes/DetalheProjeto";
import { listarProjetos } from "@/services/buscarProjetos";

export function generateStaticParams() {
  return listarProjetos().map((p) => ({ id: String(p.id) }));
}

export default async function Projeto({ params }) {
  const { id } = await params;
  return <DetalheProjeto id={id} />;
}