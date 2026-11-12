export default function ListaRepos({ repos }) {
  return (
    <ul>
      {repos.map((r) => (
        <li key={r.id}>
          <a href={r.html_url} target="_blank" rel="noreferrer">
            {r.name}
          </a>
        </li>
      ))}
    </ul>
  );
}