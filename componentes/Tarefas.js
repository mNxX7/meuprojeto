"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const colecao = collection(db, "tarefas");

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const parar = onSnapshot(colecao, (resultado) => {
      const lista = resultado.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTarefas(lista);
    });

    return () => parar();
  }, []);

  async function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;

    await addDoc(colecao, { texto: texto, concluida: false });
    setTexto("");
  }

  async function marcar(tarefa) {
    await updateDoc(doc(db, "tarefas", tarefa.id), {
      concluida: !tarefa.concluida,
    });
  }

  async function remover(id) {
    await deleteDoc(doc(db, "tarefas", id));
  }

  return (
    <div>
      <h2>Minhas tarefas</h2>

      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.concluida}
              onChange={() => marcar(t)}
            />
            <span style={{ textDecoration: t.concluida ? "line-through" : "none" }}>
              {t.texto}
            </span>
            <button onClick={() => remover(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}