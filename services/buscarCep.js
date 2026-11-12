import { consultarViaCep } from "@/lib/buscacep";

export function limparCep(cep) {
  return String(cep || "").replace(/\D/g, "");
}

export function validarCep(cep) {
  return limparCep(cep).length === 8;
}

export async function buscarEnderecoPorCep(cep) {
  const cepLimpo = limparCep(cep);

  if (!validarCep(cepLimpo)) {
    throw new Error("CEP inválido! Digite 8 números.");
  }

  const { ok, dados } = await consultarViaCep(cepLimpo);

  if (!ok) {
    throw new Error("Erro ao consultar o CEP.");
  }

  if (dados.erro) {
    throw new Error("CEP não encontrado!");
  }

  return dados;
}