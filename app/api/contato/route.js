export async function POST(request) {
    try {
        const dados = await request.json();

        console.log("Contato recebido:", dados);

        return Response.json({
            mensagem: `Obrigado, ${dados.nome}! Seu contato foi recebido.`
        }, { status: 200 });

    } catch (error) {
        console.error(error);

        return Response.json({
            erro: "Erro ao receber contato."
        }, { status: 500 });
    }
}