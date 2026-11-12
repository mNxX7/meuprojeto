import { projetos, encontrarProjeto } from "@/lib/projetos";

export function listarProjetos() {
  return projetos;
}

export function buscarProjetoPorId(id) {
  const projeto = encontrarProjeto(id);

  if (!projeto) {
    throw new Error("Projeto não encontrado!");
  }

  return projeto;
}