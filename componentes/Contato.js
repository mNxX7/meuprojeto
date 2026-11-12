"use client";

import { useState } from "react";
import { enviarContato } from "@/services/enviarContato";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [aviso, setAviso] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setCarregando(true);

    try {
      const dados = await enviarContato(nome);
      setAviso(dados.mensagem);
      setNome("");
    } catch (error) {
      setAviso(error.message);
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