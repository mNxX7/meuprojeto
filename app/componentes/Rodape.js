export default function Rodape() {
    const ano = new Date().getFullYear();
    console.log(ano)
    return(
        <footer>
            Essa é minha nota de rodapé.

            Ano {ano}
        </footer>
    )
}