export async function GET() {
    const projetos = [
        {
            id: 1,
            nome: "Meu portfólio",
            descricao: "Teste de projeto"
        },
        {
            id: 2,
            nome: "Busca CEP",
            descricao: "Consulta de endereço por CEP"
        }
    ];
    return Response.json(projetos);
}