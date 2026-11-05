import { collection, addDoc, serverTimestamp }
  from "firebase/firestore";
import { db } from "./firebase";

const colecao = collection(db, "tarefas");

export async function criarTarefa(texto) {
  await addDoc(colecao, {
    texto,
    feita: false,
    criadaEm: serverTimestamp(),
  });
}
