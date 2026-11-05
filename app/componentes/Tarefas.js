"use client"
import { useState} from "react";
import { criarTarefa } from "@/lib/tarefas";
export default function Tarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");
    function adicionar(e) {
        e.preventDefault();
        if(!texto.trim()) return;
        
        try {
            criarTarefa(texto).then((novaTarefa) => {
                setTarefas([...tarefas, novaTarefa]);
                setTexto("");
            });
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
            alert("Erro ao criar tarefa.");
        }  
    
}

return (
    <div>
        <h2>Minhas Tarefas</h2>
        <form onSubmit={adicionar}>
            <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite uma tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
        <p>Faltam  tarefas para concluir.</p>
        
    </div>
)
}