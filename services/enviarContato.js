import { adicionarContato, limparNome, validarNome } from "@/lib/contatos";

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