import { limparNome, validarNome } from "@/lib/contatos";

export async function enviarContato(nome) {
  if (!validarNome(nome)) {
    throw new Error("Escreva seu nome completo!");
  }

  const resposta = await fetch("/api/contato", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome: limparNome(nome) }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.erro || "Erro ao enviar.");
  }

  return dados;
}