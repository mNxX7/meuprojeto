"use client";
import { useState } from "react";
import { adicionarPessoa} from "@/lib/pessoa";

function enviar(e, nome, idade, cpf, setNome, setIdade, setCpf) {
    e.preventDefault();

    if (!nome || !idade || !cpf) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    try{
        adicionarPessoa(nome, idade, cpf);
        setNome("");
        setIdade("");
        setCpf("");
        alert("Formulário enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
    }
    

}

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <div>
            <form onSubmit={(e) => enviar(e, nome, idade, cpf, setNome, setIdade, setCpf)}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="idade">Idade:</label>
                <input
                    type="Number"
                    id="idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                    <button type="submit">Enviar</button>
                </form>
        </div>
    )

}