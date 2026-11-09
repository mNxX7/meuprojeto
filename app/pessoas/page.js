"use client";

import { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { adicionarPessoa, editarPessoa, deletarPessoa } from "@/lib/pessoa";
import { getDocs } from "firebase/firestore";

export default function Pessoas() {
    const [pessoas, setPessoas] = useState([]);
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [detalhes, setDetalhes] = useState(null);

    async function carregar() {
        const snapshot = await getDocs(collection(db, "pessoas"));
        const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPessoas(lista);
    }

    async function salvar(e) {
        e.preventDefault();

        if (!nome || !idade || !cpf) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            if (id) {
                await editarPessoa(id, nome, idade, cpf);
            } else {
                await adicionarPessoa(nome, idade, cpf);
            }
            setId("");
            setNome("");
            setIdade("");
            setCpf("");
            carregar();
        } catch (error) {
            alert("Erro ao salvar.")
        }
    }

    function editar(pessoa) {
        setId(pessoa.id);
        setNome(pessoa.nome);
        setIdade(pessoa.idade);
        setCpf(pessoa.cpf);
    }

    function verDetalhes(pessoa) {
        setDetalhes(pessoa);
    }

    async function deletar(pessoa) {
        if (confirm(`Tem certeza que deseja deletar ${pessoa.nome}?`)) {
            try {
                await deletarPessoa(pessoa.id);
                carregar();
            } catch (error) {
                alert("Erro ao deletar.")
            }
        }
    }
        return (
            <div>
                <h1>Cadastro</h1>

                <form onSubmit={salvar}>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
                    <input value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Idade" />
                    <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
                    <button type="submit">{id ? "Editar" : "Adicionar"}</button>
                    </form>

                    <button onClick={carregar}>Carregar lista</button>

                    {pessoas.map((pessoa) => (
                        <div key={pessoa.id}>
                            <span>{pessoa.nome} - {pessoa.idade} - {pessoa.cpf}</span>
                            <button onClick={() => editar(pessoa)}>Editar</button>
                            <button onClick={() => verDetalhes(pessoa)}>Detalhes</button>
                            <button onClick={() => deletar(pessoa)}>Deletar</button>
                        </div>
                    ))}

                    {detalhes && (
                        <div>
                            <p>Nome: {detalhes.nome}</p>
                            <p>Idade: {detalhes.idade}</p>
                            <p>CPF: {detalhes.cpf}</p>
                        </div>
                    )}
            </div>
        )

};
