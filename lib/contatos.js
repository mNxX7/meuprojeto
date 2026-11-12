import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function adicionarContato(contato) {
  await addDoc(collection(db, "contatos"), {
    ...contato,
    criadoEm: new Date(),
  });
}

export function limparNome(nome) {
  return String(nome || "").trim();
}

export function validarNome(nome) {
  return limparNome(nome).length >= 3;
}