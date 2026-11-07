import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const colecao = collection(db, "pessoas");

export async function adicionarPessoa(nome, idade, cpf) {
    try { 
        await addDoc(colecao, { nome, idade, cpf });

     }  catch (error) {
        console.error("Erro ao adicionar pessoa:", error);
        console.log("Erro ao adicionar pessoa:0", error.message);
     }
}

export async function editarPessoa(id, nome, idade, cpf) {
    try {
        await updateDoc(doc(colecao, id), {nome, idade, cpf});
    } catch (error) {
        console.error("Erro ao editar pessoa:", error);
        console.log("Erro ao editar pessoa:0", error.message);
    }
}

export async function deletarPessoa(id) {
    try {
        await deleteDoc(doc(colecao, id));
    } catch (error) {
        console.error("Erro ao deletar pessoa:", error);
        console.log("Erro ao deletar pessoa:0", error.message);
    }
}