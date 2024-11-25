const container = document.getElementById('container')

const get_json = async (caminho) => {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
        throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }
    return await resposta.json(); // Certifique-se de que está chamando .json()
};

get_json("https://botafogo-atletas.mange.li/2024-1/masculino").then((dados) => {
    console.log("Dados retornados:", dados); // Verifique o conteúdo
});


const cardatleta = (atleta) => {
    const cartao = document.createElement('article');
    cartao.id = "article_jogadores";
    const nome = document.createElement('h1');
    const imagem = document.createElement('img');


    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);


    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);


    const saiba_mais = document.createElement('h3');
    saiba_mais.id = "saiba_mais"
    saiba_mais.innerHTML = "<u>Saiba mais<u>"
    cartao.appendChild(saiba_mais);


    cartao.onclick = clickmanip;


    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.caminhoImagem = atleta.imagem;

    return cartao ;
}


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))



const clickmanip = ( e ) => {
    const id = e.currentTarget.dataset.id;
    window.location = `detalhe.html?id=${id}`;
}

document.getElementById("masculino").onclick = function () { get_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
    async (obj) => {
        document.getElementById("container").innerHTML = "";
        const jogadores = obj;
        localStorage.setItem('elenco', 'masculino');
        console.log(jogadores);
        const carregando = document.createElement('h2');
        carregando.innerHTML = `Carregando...`;
        carregando.id = `carregando`;
        document.body.appendChild(carregando);
        await sleep(1200);
        document.getElementById("container").innerHTML = '';
        jogadores.forEach(
          (ele) => document.getElementById("container").appendChild(cardatleta(ele))
        )
        document.getElementById('carregando').remove();
    }
  );}
  
  document.getElementById("feminino").onclick =function () { get_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
    async (obj) => {
        document.getElementById("container").innerHTML = "";
        const jogadores = obj;
        localStorage.setItem('elenco', 'feminino');
        console.log(jogadores);
        const carregando = document.createElement('h2');
        carregando.innerHTML = `Carregando...`;
        carregando.id = `carregando`;
        document.body.appendChild(carregando);
        await sleep(1200);
        document.getElementById("container").innerHTML = '';
        jogadores.forEach(
          (ele) => document.getElementById("container").appendChild(cardatleta(ele))
        )
        document.getElementById('carregando').remove();
    }
  );}
  
  document.getElementById("all").onclick =function () { get_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    async (obj) => {
        document.getElementById("container").innerHTML = "";
        const jogadores = obj;
        localStorage.setItem('elenco', 'all');
        console.log(jogadores);
        const carregando = document.createElement('h2');
        carregando.innerHTML = `Carregando...`;
        carregando.id = `carregando`;
        document.body.appendChild(carregando);
        await sleep(1200);
        document.getElementById("container").innerHTML = '';
        jogadores.forEach(
          (ele) => document.getElementById("container").appendChild(cardatleta(ele))
        )
        document.getElementById('carregando').remove();
    }
  );}
  
  
  
  document.getElementById('barrapesquisa').oninput = function () {
      if (localStorage.getItem('elenco') == 'masculino'){
        get_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
          async (obj) => {
            document.getElementById('container').innerHTML = '';
            obj.forEach(
              (ele) => {
                if (ele.nome.toLowerCase().includes(document.getElementById('barrapesquisa').value.toLowerCase())){
                  document.getElementById('container').appendChild(cardatleta(ele))
                }
                else{
                  return;
                }
              }
            )
          }
        );
      }
      else if (localStorage.getItem('elenco') == 'feminino'){
        get_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
          async (obj) => {
            document.getElementById('container').innerHTML = '';
            obj.forEach(
              (ele) => {
                if (ele.nome.toLowerCase().includes(document.getElementById('barrapesquisa').value.toLowerCase())){
                  document.getElementById('container').appendChild(cardatleta(ele))
                }
                else{
                  return;
                }
              }
            )
          }
        );
      }
      else if (localStorage.getItem('elenco') == 'all'){
        get_json("https://botafogo-atletas.mange.li/2024-1/all").then(
          async (obj) => {
            document.getElementById('container').innerHTML = '';
            obj.forEach(
              (ele) => {
                if (ele.nome.toLowerCase().includes(document.getElementById('barrapesquisa').value.toLowerCase())){
                  document.getElementById('container').appendChild(cardatleta(ele))
                }
                else{
                  return;
                }
              }
            )
          }
        )
      }
    }
  
  document.getElementById('botoeselenco').onchange = function (){
    if(document.getElementById('botoeselenco').value == 'masculino'){
      get_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
        async (obj) => {
            document.getElementById("container").innerHTML = "";
            const jogadores = obj;
            localStorage.setItem('elenco', 'masculino');
            console.log(jogadores);
            const carregando = document.createElement('h2');
            carregando.innerHTML = `Carregando...`;
            carregando.id = `carregando`;
            document.body.appendChild(carregando);
            await sleep(1200);
            document.getElementById("container").innerHTML = '';
            jogadores.forEach(
              (ele) => document.getElementById("container").appendChild(cardatleta(ele))
            )
            document.getElementById('carregando').remove();
        }
      );
    }
    else if(document.getElementById('botoeselenco').value == 'feminino'){
      get_json("https://botafogo-atletas.mange.li/2024-1/feminino").then(
        async (obj) => {
            document.getElementById("container").innerHTML = "";
            const jogadores = obj;
            localStorage.setItem('elenco', 'feminino');
            console.log(jogadores);
            const carregando = document.createElement('h2');
            carregando.innerHTML = `Carregando...`;
            carregando.id = `carregando`;
            document.body.appendChild(carregando);
            await sleep(1200);
            document.getElementById("container").innerHTML = '';
            jogadores.forEach(
              (ele) => document.getElementById("container").appendChild(cardatleta(ele))
            )
            document.getElementById('carregando').remove();
        }
      );
    }
    else if(document.getElementById('botoeselenco').value == 'all'){
      get_json("https://botafogo-atletas.mange.li/2024-1/all").then(
        async (obj) => {
            document.getElementById("container").innerHTML = "";
            const jogadores = obj;
            localStorage.setItem('elenco', 'all');
            console.log(jogadores);
            const carregando = document.createElement('h2');
            carregando.innerHTML = `Carregando...`;
            carregando.id = `carregando`;
            document.body.appendChild(carregando);
            await sleep(1200);
            document.getElementById("container").innerHTML = '';
            jogadores.forEach(
              (ele) => document.getElementById("container").appendChild((ele))
            )
            document.getElementById('carregando').remove();
        }
      );
    }
  }