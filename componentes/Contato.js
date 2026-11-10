"use client";

import { useState } from "react";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [aviso, setAviso] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function enviar(e) {
        e.preventDefault();

        if (nome.trim().length < 3) {
            setAviso("Escreva seu nome completo!");
            return;
        }

        setCarregando(true);

        try {
            const resposta = await fetch("/api/contato", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome
                })
            });

            const dados = await resposta.json();
            console.log("Status HTTP:", resposta.status);
            console.log("API respondeu:", dados);

            if (!resposta.ok) {
                setAviso(dados.erro || "Erro ao enviar.");
                return;
            }

            setAviso(dados.mensagem);
            setNome("");

        } catch (error) {
            console.error("Erro:", error);
            setAviso("Não foi possível conectar à API.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div>
            <form onSubmit={enviar}>
                <label htmlFor="nome">Nome:</label>

                <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />

                <button type="submit" disabled={carregando}>
                    {carregando ? "Enviando..." : "Enviar"}
                </button>
            </form>

            <p>{aviso}</p>
        </div>
    );
}