const botoes = document.querySelectorAll("#menu button");
const area = document.getElementById("conteudo");

async function mostrar(id) {
  try {
    const resposta = await fetch(`../topicos/${id}.html`);
    if (!resposta.ok) throw new Error("Arquivo não encontrado");
    area.innerHTML = await resposta.text();
  } catch (erro) {
    area.textContent = "Não foi possível carregar este conteúdo.";
  }
  botoes.forEach(b => b.classList.toggle("ativo", b.dataset.id === id));
  history.replaceState(null, "", "#" + id);
}

botoes.forEach(b => b.onclick = () => mostrar(b.dataset.id));
mostrar(location.hash.slice(1) || botoes[0].dataset.id);