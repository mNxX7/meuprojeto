"use client";

import { useState } from "react";
import { criarTarefa } from "@/lib/tarefas";

export default function CriarTarefa() {
  const [texto, setTexto] = useState("");
}
  async function handleSubmit(e) {
    e.preventDefault();
    if (texto.trim()) return;
    
    try {
        await criarTarefa(texto);
        setTexto("");
        alert("Tarefa criada!");
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        alert("Erro ao criar tarefa.");
    }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite a tarefa"
            />
            <button type="submit">Criar Tarefa</button>
        </form>
    );