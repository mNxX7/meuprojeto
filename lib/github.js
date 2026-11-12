export const USUARIO_GITHUB = "mvmendoncas";

export function limparUsuario(usuario) {
  return String(usuario || "").trim();
}

export function montarUrlRepos(usuario = USUARIO_GITHUB) {
  const usuarioLimpo = limparUsuario(usuario);

  if (!usuarioLimpo) {
    throw new Error("Usuário inválido!");
  }

  return `https://api.github.com/users/${usuarioLimpo}/repos`;
}