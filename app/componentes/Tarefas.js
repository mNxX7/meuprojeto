"use client"
import { useState} from "react";
export default function Tarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");
    function adicionar(e) {
        e.preventDefault();
        if(!texto.trim()) return;

        setTarefas([
            ...tarefas,
            {
                id: Date.now(),
                texto: texto.trim(),
                concluida: false
            }
        ]);
        setTexto("");
    }
    function concluir(id) {
        setTarefas(
            tarefas.map((t) =>
                t.id === id
                ? {...t, concluida: !t.concluida }
                : t
        )
    );
}
const faltam = tarefas.filter(
    (t) => !t.concluida
).length;

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
        <p>Faltam {faltam} tarefas para concluir.</p>
        <ul>
            {tarefas.map((t) => (
                <li key={t.id}>
                    <label>
                        <input
                        type="checkbox"
                        checked={t.concluida}
                        onChange={() => concluir(t.id)}
                        />
                        <span
                        style={{
                            textDecoration: t.concluida
                            ? "line-through"
                            :"none"
                        }}
                        >
                            {t.texto}
                        </span>
                    </label>
                </li>
            )
        )}
        </ul>
    </div>
)
}