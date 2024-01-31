const tituloProduto = document.getElementById("titulo-produto");
const imgVisualizacao = document.getElementById("imagem-visualizacao");
const nomeCor = document.getElementById("nome-cor-selecionada");
const imgMinuatura0 = document.getElementById("0-imagem-miniatura");
const imgMinuatura1 = document.getElementById("1-imagem-miniatura");
const imgMinuatura2 = document.getElementById("2-imagem-miniatura");

let imgSelecionado = 1;
let tamanhoSeleciondo = 1;
let corSelecionado = 1;
const verdeCipreste = {
  name: "verde-cipreste",
  pasta: "imagens-verde-cipreste",
};
//  objetos os modelos Aplle
const azulInverno = {
  name: "Azul-Inverno",
  pasta: "imagens-azul-inverno",
};
const meiaNoite = {
  name: "Meia-Noite",
  pasta: "imagens-meia-noite",
};
const estelar = {
  name: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  name: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
// 3- um array de tamanho dos Aplles
const opcaoDeTamanho = ["41 mm", "45 mm"];

function trocarImg() {
  //1- o checked já vai esta colocando no html, quando dar f5 o checked vai esta já seleciondo, quando o usuria selecionar as img, o checked vai prosperá para qual usuario seleciono, po tanto que eu quero pega é somente o id, enão por isso eu coloque o id no final do checked
  const idOpcaoSeleciondo = document.querySelector(
    "[name='opcao-imagem']:checked"
  ).id;
  //2- usei este informação para autualizar
  imgSelecionado = idOpcaoSeleciondo.charAt(0);
  // qual é o valor do compo
  imgVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imgSelecionado}.jpeg`;
}

// 4- função reponsalvel de troca o tamanho da caixar dos Aplles de acordo da opição do usuario
// atualizar a var. de controle de tamanho da caixa
function trocaTamanho() {
  const idOpcaoSeleciondo = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  // A opicao do usuário que escolheu
  tamanhoSeleciondo = idOpcaoSeleciondo.charAt(0);
  // mudar o títuldo do produto,

  // tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcaoDeTamanho[tamanhoSeleciondo]}`;

  // trocado o tamnho da img, class é do css que ja tem configurção ja feita e colando um condiçõe
  if (opcaoDeTamanho[tamanhoSeleciondo] === "41 mm") {
    imgVisualizacao.classList.add("caixa-pequena");
  } else {
    imgVisualizacao.classList.remove("caixa-pequena");
  }
}

function trocaCor() {
  // 5- atualizar cor selecionda
  const idOpcaoSeleciondo = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionado = idOpcaoSeleciondo.charAt(0);
  // troca título do página

  // mundando o innerText do título, a opcoesCores é o nome do produto que esta na lista de array onde estão os Objeto, entre [] vai mostra o index selecionado do usuário e com parametro do name do Object para pega o atributo do nome do produto
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionado].name} para caixa de ${opcaoDeTamanho[tamanhoSeleciondo]}`;
  // troca a cor
  nomeCor.innerText = `Cor - ${opcoesCores[corSelecionado].name}`;

  //torca img miniatura exibidas
  // é responsavel por troca a img de visualização baseado que é selecioado de cor e no miniatura
  imgMinuatura0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionado].pasta}/imagem-0.jpeg`;
  imgMinuatura1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionado].pasta}/imagem-1.jpeg`;
  imgMinuatura2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionado].pasta}/imagem-2.jpeg`;

  //torca img exibidas de visulização
  imgVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionado].pasta}/imagem-${imgSelecionado}.jpeg`;
}
