const verificaSenha = () => {
  console.log(hex_sha256('SENHAZUDA'));
  const entrada = document.querySelector("#senhazuda").value;
  const senha = "be610d50f1541d93f600aa87689d417fb44b788da44b4a91d79fb5235103437f"; // SHA-256 de SENHAZUDA.

  if (hex_sha256(entrada) === senha) {
      localStorage.setItem("logado", "sim");
      window.location = 'elenco.html';
  } else {
      alert("Você errou a senha");
  }
};

const limpaLogado = () => {
  localStorage.removeItem('logado');
  window.location = '/';
};

document.getElementById("botaozudo").onclick = verificaSenha;
document.getElementById("botaoLogout").onclick = limpaLogado;

const login = () => {
  if (localStorage.getItem('logado') === 'sim') {
      document.getElementById('corposite').style.display = 'none';
      document.getElementById('botaoLogout').style.display = 'block';
  }
};

login();
