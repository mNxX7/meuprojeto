export async function consultarRepos(usuario) {
  const resposta = await fetch(`https://api.github.com/users/${usuario}/repos`, {
    next: { revalidate: 3600 },
  });
  const dados = resposta.ok ? await resposta.json() : null;

  return { ok: resposta.ok, dados };
}