import { consultarRepos } from "@/lib/github";

const USUARIO_GITHUB = "mvmendoncas";

export function limparUsuario(usuario) {
  return String(usuario || "").trim();
}

export async function buscarRepositorios(usuario = USUARIO_GITHUB) {
  const usuarioLimpo = limparUsuario(usuario);

  if (!usuarioLimpo) {
    throw new Error("Usuário inválido!");
  }

  const { ok, dados } = await consultarRepos(usuarioLimpo);

  if (!ok) {
    throw new Error("Não foi possível carregar os repositórios.");
  }

  return dados;
}