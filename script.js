// Inicializando o carrinho
let carrinho = [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
  // Adiciona o produto ao carrinho
  carrinho.push({ nome: nomeProduto, preco: preco });

  // Atualizar a exibição do carrinho
  atualizarCarrinho();
}

// Função para atualizar o carrinho na tela
function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('listaCarrinho');
  const totalCarrinho = document.getElementById('totalCarrinho');

  // Limpa a lista do carrinho antes de repopular
  listaCarrinho.innerHTML = '';

  let total = 0;

  // Adiciona cada produto na lista
  carrinho.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  // Atualiza o total do carrinho
  totalCarrinho.textContent = total.toFixed(2);
}

// Modal: Abrir o modal
const abrirCarrinho = document.getElementById('abrirCarrinho');
const modalCarrinho = document.getElementById('modalCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');

// Mostrar o modal
abrirCarrinho.addEventListener('click', () => {
  modalCarrinho.style.display = 'block';
});

// Fechar o modal
fecharCarrinho.addEventListener('click', () => {
  modalCarrinho.style.display = 'none';
});

// Fechar o modal se o usuário clicar fora da caixa do modal
window.addEventListener('click', (event) => {
  if (event.target === modalCarrinho) {
    modalCarrinho.style.display = 'none';
  }
});

// Adicionar eventos aos botões "Adicionar ao carrinho"
const botoesAdicionar = document.querySelectorAll('.adicionar');
botoesAdicionar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nomeProduto = botao.parentElement.querySelector('h2').textContent;
    const precoProduto = parseFloat(botao.getAttribute('data-preco'));

    adicionarAoCarrinho(nomeProduto, precoProduto);
  });
});
