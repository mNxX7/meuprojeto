import Link from "next/link";
import { notFound } from "next/navigation";
import { projetos } from "../../componentes/Dados";

export function generateStaticParams() {
  return projetos.map((p) => ({ id: String(p.id) }));
}

export default async function Projeto({ params }) {
  const { id } = await params;
  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
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