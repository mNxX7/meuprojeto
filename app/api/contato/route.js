import { NextResponse } from "next/server";
import { adicionarContato } from "../../../lib/contatos";

export async function POST(request) {
  try {
    const { nome } = await request.json();

    if (!nome || nome.trim().length < 3) {
      return NextResponse.json(
        { erro: "Escreva seu nome completo!" },
        { status: 400 }
      );
    }

    await adicionarContato({ nome: nome.trim() });

    return NextResponse.json({ mensagem: "Contato enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar:", error);
    return NextResponse.json(
      { erro: "Erro ao salvar no banco." },
      { status: 500 }
    );
  }
}