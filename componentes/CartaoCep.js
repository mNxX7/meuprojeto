export default function CartaoCep({ endereco }) {
    return (
        <div>
            <h3>Endereço encontrado:</h3>
            <p>CEP: {endereco.cep}</p>
            <p>Rua: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>Estado: {endereco.uf}</p>
        </div>
    );
}