

// Criando a loja virtual

// Definindo variáveis
let produtos = [];
let carrinho = [];
let total = 0;

// Função para adicionar produtos
function adicionarProduto(nome, preco) {
  let produto = {
    nome: nome,
    preco: preco
  };
  produtos.push(produto);
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      carrinho.push(produtos[i]);
      total += produtos[i].preco;
    }
  }
}

// Função para remover produtos do carrinho
function removerDoCarrinho(nome) {
  for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i].nome === nome) {
      total -= carrinho[i].preco;
      carrinho.splice(i, 1);
    }
  }
}

// Função para exibir o carrinho
function exibirCarrinho() {
  console.log("Produtos no carrinho:");
  for (let i = 0; i < carrinho.length; i++) {
    console.log(carrinho[i].nome + " - R$" + carrinho[i].preco);
  }
  console.log("Total: R$" + total);
}

// Adicionando produtos
adicionarProduto("Camiseta", 50);
adicionarProduto("Calça Jeans", 100);
adicionarProduto("Tênis", 150);

// Adicionando produtos ao carrinho
adicionarAoCarrinho("Camiseta");
adicionarAoCarrinho("Calça Jeans");

// Exibindo o carrinho
exibirCarrinho();

// Removendo produtos do carrinho
removerDoCarrinho("Camiseta");

// Exibindo o carrinho
exibirCarrinho();