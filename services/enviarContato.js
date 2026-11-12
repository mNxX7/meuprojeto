import { adicionarContato } from "@/lib/contatos";

export function limparNome(nome) {
  return String(nome || "").trim();
}

export function validarNome(nome) {
  return limparNome(nome).length >= 3;
}

export async function enviarContato(nome) {
  if (!validarNome(nome)) {
    throw new Error("Escreva seu nome completo!");
  }

  try {
    await adicionarContato({ nome: limparNome(nome) });
  } catch (error) {
    console.error("Erro ao salvar:", error);
    throw new Error("Erro ao salvar no banco.");
  }

  return { mensagem: "Contato enviado com sucesso!" };
}