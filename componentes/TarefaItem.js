export default function TarefaItem({

tarefa, onAlternar, onRemover

}) {

return (

<li>

{tarefa.texto}

<button onClick={onAlternar}>Feita</button>

<button onClick={onRemover}>Remover</button>

</li>

);
}