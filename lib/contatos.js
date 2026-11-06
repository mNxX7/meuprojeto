import { db }   from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const colecao = collection(db, "contatos");

export async function adicionarContato(contato) {
    return addDoc(colecao, {
        contato: contato,
        enviadoEm: serverTimestamp(),
    });
}