import Link from "next/link";
import ListaRepos from "@/componentes/ListaRepos";
import { buscarRepositorios } from "@/services/buscarGithub";

export default async function GitHub() {
  let repos;

  try {
    repos = await buscarRepositorios();
  } catch (e) {
    return (
      <div className="pagina">
        <Link href="/">← Voltar</Link>
        <h1>Não foi possível carregar os repositórios</h1>
        <p>Confira se o usuário do GitHub está escrito corretamente.</p>
      </div>
    );
  }

  return (
    <div className="pagina">
      <Link href="/">← Voltar</Link>
      <h1>Meus repositórios no GitHub</h1>
      <ListaRepos repos={repos} />
    </div>
  );
}