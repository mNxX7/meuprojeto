import Link from "next/link";

export default function NaoEncontrada() {
  return (
    <div className="pagina erro">
      <p className="erro-codigo">404</p>
      <h1>Página não encontrada</h1>
      <p>
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link href="/" className="botao">Voltar para o início</Link>
    </div>
  );
}