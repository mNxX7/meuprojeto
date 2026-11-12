import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarProjetoPorId } from "@/services/buscarProjetos";

export default async function DetalheProjeto({ id }) {
  let projeto;

  try {
    projeto = buscarProjetoPorId(id);
  } catch {
    notFound();
  }

  return (
    <div className="pagina">
      <Link href="/" className="voltar">← Voltar</Link>
      <h1>{projeto.titulo}</h1>
      <p>{projeto.descricao}</p>
      <div className="tags">
        {projeto.tecnologias.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}