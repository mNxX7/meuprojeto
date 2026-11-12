"use client";

import { useState } from "react";
import { buscarEnderecoPorCep } from "@/services/buscarCep";
import CartaoCep from "./CartaoCep";

export default function BuscarCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [aviso, setAviso] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const dados = await buscarEnderecoPorCep(cep);
            setEndereco(dados);
            setAviso("");
        } catch (error) {
            setAviso(error.message);
            setEndereco(null);
        }
    }

    return (
        <div>
            <h2>Buscar CEP</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Digite seu CEP"
                    maxLength={9}
                />
                <button type="submit">Buscar</button>
            </form>

            {aviso && <p>{aviso}</p>}
            {endereco && <CartaoCep endereco={endereco} />}
        </div>
    );
}