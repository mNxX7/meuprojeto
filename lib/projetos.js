export const projetos = [
  {
    id: 1,
    titulo: "Projeto de exemplo",
    descricao: "Descrição do projeto.",
    tecnologias: ["Next.js", "React"],
  },
];

export function encontrarProjeto(id) {
  return projetos.find((p) => p.id === Number(id));
}