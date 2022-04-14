var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/produto", true);
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        console.log(xhr.statusText);
    } else {
        var response = xhr.responseText;
        var produtos = JSON.parse(response);
        montarProduto(produtos);
        montarGaleriaProdutosSimilares(produtos);
    }
}

function montarProduto(produtos) {
    const produto = produtos[0];
    
    //Criar imagem do produto
    let produtoImagem = document.createElement("img");
    produtoImagem.setAttribute("src",produto.urlImagem);
    produtoImagem.classList.add("produto__imagem");

    // Criar Detalhes
    let produtoTitulo = document.createElement("h2");
    produtoTitulo.classList.add("produto__titulo");
    produtoTitulo.textContent = produto.nome;

    let produtoPreco = document.createElement("h3");
    produtoPreco.classList.add("produto__preco");
    produtoPreco.textContent = produto.preco;

    let produtoDescricao = document.createElement("p");
    produtoDescricao.classList.add("produto__descricao");
    produtoDescricao.textContent = produto.descricao;

    // Consertar posição 
    //produtoContainer.insertBefore(produtoImagem, produto.produtoDetalhes);

    const produtoDetalhes = document.querySelector(".produto__detalhes");
    
    produtoDetalhes.appendChild(produtoTitulo);
    produtoDetalhes.appendChild(produtoPreco);
    produtoDetalhes.appendChild(produtoDescricao);

    //Montar na Pagina

    let produtoContainer = document.querySelector(".produto__container");
    produtoContainer.appendChild(produtoImagem);
    produtoContainer.appendChild(produtoDetalhes);
}

function montarGaleriaProdutosSimilares(produtos) {
    produtos.forEach(produto => {
        if (produto.categoria == "Star Wars") {
            var galeriaItem = montaGaleriaItem(produto);
            var galeriaLista = document.getElementById("produtos-similares");
            galeriaLista.append(galeriaItem);
        }
    });
}