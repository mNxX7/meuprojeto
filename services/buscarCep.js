import { montarUrlViaCep } from "@/lib/buscacep";

export async function buscarEnderecoPorCep(cep) {
  const resposta = await fetch(montarUrlViaCep(cep));

  if (!resposta.ok) {
    throw new Error("Erro ao consultar o CEP.");
  }

  const dados = await resposta.json();

  if (dados.erro) {
    throw new Error("CEP não encontrado!");
  }

  return dados;
}