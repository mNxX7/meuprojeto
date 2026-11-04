import Link from "next/link";
import { projetos } from "../componentes/Dados";

export default function Projetos() {
  return (
    <div className="pagina">
      <Link href="/">← Voltar</Link>

      <h1>Meus Projetos</h1>

      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <h2>{projeto.titulo}</h2>
          <p>{projeto.descricao}</p>

          <div className="tags">
            {projeto.tecnologias.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <Link href={`/projetos/${projeto.id}`}>
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}