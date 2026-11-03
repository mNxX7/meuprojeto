"use client";

import { useState } from "react";

export default function BuscarCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [aviso, setAviso] = useState("");

    async function buscarCep(e) {
        e.preventDefault();

        const cepLimpo = cep.replace(/\D/g, "");

        if (cepLimpo.length !== 8) {
            setAviso("Digite um CEP válido!");
            setEndereco(null);
            return;
        }

        try {
            const resposta = await fetch(
                `https://viacep.com.br/ws/${cepLimpo}/json/`
            );

            const dados = await resposta.json();

            if (dados.erro) {
                setAviso("CEP não encontrado!");
                setEndereco(null);
                return;
            }

            setEndereco(dados);
            setAviso("");

        } catch (error) {
            setAviso("Erro ao consultar o CEP.");
            setEndereco(null);
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Buscar CEP</h2>

            <form onSubmit={buscarCep}>
                <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Digite seu CEP"
                    maxLength={9}
                />

                <button type="submit">
                    Buscar
                </button>
            </form>

            {aviso && <p>{aviso}</p>}

            {endereco && (
                <div>
                    <h3>Endereço encontrado:</h3>
                    <p>CEP: {endereco.cep}</p>
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Estado: {endereco.uf}</p>
                </div>
            )}
        </div>
    );
}