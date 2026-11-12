import Link from "next/link";
import { listarProjetos } from "@/services/buscarProjetos";

export default function Projetos() {
  return (
    <div className="pagina">
      <Link href="/" className="voltar">← Voltar</Link>
      <h1>Projetos</h1>
      <ul>
        {listarProjetos().map((p) => (
          <li key={p.id}>
            <Link href={`/projetos/${p.id}`}>{p.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}