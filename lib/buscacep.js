export function limparCep(cep) {
  return String(cep || "").replace(/\D/g, "");
}

export function validarCep(cep) {
  return limparCep(cep).length === 8;
}

export function montarUrlViaCep(cep) {
  const cepLimpo = limparCep(cep);

  if (!validarCep(cepLimpo)) {
    throw new Error("CEP inválido! Digite 8 números.");
  }

  return `https://viacep.com.br/ws/${cepLimpo}/json/`;
}