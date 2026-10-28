
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Cartao from "./componentes/Cartao";
import { projetos } from "./componentes/Dados";
import Secao from "./componentes/Secao";
import Curtidas from "./componentes/Curtidas";
import Detalhes from "./componentes/Detalhes";
import Contato from "./componentes/Contato";
import Tarefas from "./componentes/Tarefas";
import Link from "next/link";

export default function Home() {
  const nome = "Manoel";

  return (
    <>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contatos">Contatos</Link>
        <Link href="/github">Ver meus repositórios</Link>
      </nav>

      <div className="pagina">
        <Cabecalho />

        <h1>Meu nome é {nome}</h1>
        <p>
          Tenho 20 anos e estou cursando Desenvolvimento Web.
        </p>

        <br />

        <Secao titulo="Sobre mim">
          <p>Estudo Desenvolvimento Web.</p>
        </Secao>

        <Secao titulo="Projetos">
          {projetos.map((p) => (
        <Cartao
          key={p.id}
          id={p.id}
          titulo={p.titulo}
          descricao={p.descricao}
          tecnologias={p.tecnologias}
        />
          ))}
        </Secao>

        <br />

        <Contato />
        <br />

        <Curtidas />
        <br />

        <Tarefas />
        <br />

        <Detalhes />
        <br />

        <Rodape />
      </div>
    </>
  );
}
