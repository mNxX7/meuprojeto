import { projetos } from "@/lib/projetos";

export function listarProjetos() {
  return projetos;
}

export function buscarProjetoPorId(id) {
  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    throw new Error("Projeto não encontrado!");
  }

  return projeto;
}