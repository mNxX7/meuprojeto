import { montarUrlRepos } from "@/lib/github";

export async function buscarRepositorios(usuario) {
  const resposta = await fetch(montarUrlRepos(usuario), {
    next: { revalidate: 3600 },
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar os repositórios.");
  }

  return await resposta.json();
}