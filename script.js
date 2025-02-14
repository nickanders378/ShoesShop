// Menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Dados dinâmicos
const produtos = [
    { nome: "Tênis A", preco: "R$ 299,90", imagem: "https://via.placeholder.com/150" },
    { nome: "Tênis B", preco: "R$ 399,90", imagem: "https://via.placeholder.com/150" },
    { nome: "Tênis C", preco: "R$ 199,90", imagem: "https://via.placeholder.com/150" }
];

const categorias = [
    { nome: "Esportivo", imagem: "https://via.placeholder.com/150" },
    { nome: "Casual", imagem: "https://via.placeholder.com/150" },
    { nome: "Corrida", imagem: "https://via.placeholder.com/150" }
];

const depoimentos = [
    { nome: "Cliente 1", texto: "Ótimos tênis, recomendo!" },
    { nome: "Cliente 2", texto: "Excelente qualidade e conforto." },
    { nome: "Cliente 3", texto: "Atendimento incrível!" }
];

// Funções para carregar dados
function carregarProdutos(produtos, grid) {
    grid.innerHTML = produtos.map(produto => `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
        </div>
    `).join('');
}

function carregarCategorias(categorias, grid) {
    grid.innerHTML = categorias.map(categoria => `
        <div class="categoria">
            <img src="${categoria.imagem}" alt="${categoria.nome}">
            <h3>${categoria.nome}</h3>
        </div>
    `).join('');
}

function carregarDepoimentos(depoimentos, carousel) {
    carousel.innerHTML = depoimentos.map(depoimento => `
        <div class="depoimento">
            <h3>${depoimento.nome}</h3>
            <p>"${depoimento.texto}"</p>
        </div>
    `).join('');
}

// Carregar dados na página
document.addEventListener('DOMContentLoaded', () => {
    const destaquesGrid = document.getElementById('destaques-grid');
    const categoriasGrid = document.getElementById('categorias-grid');
    const promocoesGrid = document.getElementById('promocoes-grid');
    const depoimentosCarousel = document.getElementById('depoimentos-carousel');

    carregarProdutos(produtos, destaquesGrid);
    carregarProdutos(produtos, promocoesGrid);
    carregarCategorias(categorias, categoriasGrid);
    carregarDepoimentos(depoimentos, depoimentosCarousel);
});