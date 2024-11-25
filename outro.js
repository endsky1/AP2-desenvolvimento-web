const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const mostrarErro = (mensagem) => {
  const detalhesContainer = document.getElementById('foto');
  const mensagemErro = document.createElement('p');
  mensagemErro.textContent = mensagem;
  mensagemErro.style.color = 'black';
  detalhesContainer.appendChild(mensagemErro);
};


const pega_json = async (caminho) => {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    console.log("Dados do servidor:", dados);

    return dados;

  } catch (error) {
    console.error("Erro ao obter dados:", error);
    return null;
  }
}



if (localStorage.getItem("logado")){
pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( atleta ) => {

      if (atleta === null){
        document.body.innerHTML = `<h1>Erro!</h1>`
        return;
      }
      else{

            const container_01 = document.createElement('article');
            container_01.id = "container_01";

            const container_02 = document.createElement('div');
            container_02.id = "container_02";

            const nome = document.createElement('h1');
            nome.innerHTML = atleta.nome;
            container_02.appendChild(nome);

            const posicao = document.createElement('h2');
            posicao.innerHTML = atleta.posicao;
            container_02.appendChild(posicao);

            container_01.appendChild(container_02);


            const container_03 = document.createElement('div');
            container_03.id = "container_03";

            const imagem = document.createElement('img');
            imagem.src = atleta.imagem;
            imagem.alt = `foto de ${atleta.imagem}`
            container_03.appendChild(imagem);

            const detalhes = document.createElement('p');
            detalhes.innerHTML = atleta.detalhes;
            container_03.appendChild(detalhes);


            const informacoes = document.createElement('p');
            informacoes.innerHTML = `<strong>Jogos pelo Botafogo:</strong> ${atleta.n_jogos} <br/> <strong>Nascimento:</strong> ${atleta.nascimento} <br/> <strong>Altura:</strong> ${atleta.altura} <br/> <strong>Nacionalidade:</strong> ${atleta.naturalidade}`;
            informacoes.id = 'info'
            container_03.appendChild(informacoes);

            container_01.appendChild(container_03);


            const voltar = document.createElement("a");
            voltar.id = "voltar-button"
            voltar.href = "elenco.html";
            voltar.innerHTML = "Voltar"


            document.body.appendChild(container_01);
            document.body.appendChild(voltar);

          }
      }
  )
} else {
    document.body.innerHTML = "<h1 id='e_preciso_logar'>É preciso estar logado para ver. </h1>"
}