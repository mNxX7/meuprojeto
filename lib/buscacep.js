export async function consultarViaCep(cepLimpo) {
  const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  const dados = resposta.ok ? await resposta.json() : null;

  return { ok: resposta.ok, dados };
}