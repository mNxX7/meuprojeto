export function limparNome(nome) {
  return String(nome || "").trim();
}

export function validarNome(nome) {
  return limparNome(nome).length >= 3;
}