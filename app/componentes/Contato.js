"use client";
import { useState } from "react";
export default function Contato() {
    const [nome, setNome] = useState("");
    const [aviso, setAviso] = useState("");
    function enviar(e) {
        e.preventDefault();
        if (nome.trim().length < 3) {
            setAviso("Escreva seu nome completo!");
            return;
        }
        setAviso(`Obrigado, ${nome}!`);
        setNome("");
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
                <button type="submit">Enviar</button>
            </form>
            <p>{aviso}</p>
        </div>
    );
}