
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:3000/produto", true);
// xhr.send();

// xhr.onload = function() {
//     if (xhr.status != 200) {
//         console.log(xhr.statusText);
//     } else {
//         var response = xhr.responseText;
//         var produtos = JSON.parse(response);
//         console.log(produtos);
//         construirGaleriaListas(produtos);
//     }
// }

function construirGaleriaListas(produtos) {
    produtos.forEach(function(produto) {
      var galeriaItem = montaGaleriaItem(produto);
      var galeriaCategoria = produto.categoria;
      if (galeriaCategoria != null) {
          var galeriaLista = document.getElementById(galeriaCategoria);
          galeriaLista.append(galeriaItem);
      } else { //Criar a função para criar nova seção se nao houver Categoria existente
        galeriaCategoria = "Diversos";
        var galeriaLista = document.getElementById(galeriaCategoria);
        galeriaLista.append(galeriaItem);
      }
    });
}

function montaGaleriaItem(produto){
  var galeriaItem = document.createElement("galeriaItem");
  galeriaItem.classList.add("galeria__item");

  galeriaItem.appendChild(montaGaleriaImagem(produto.urlImagem));
  galeriaItem.appendChild(montaGaleriaNome(produto.nome));
  galeriaItem.appendChild(montaGaleriaPreco(produto.preco));
  galeriaItem.appendChild(montaGaleriaLink(produto.urllink));

  return galeriaItem;
}

function montaGaleriaImagem (urlImagem) {
  var galeriaImagem = document.createElement("img");
  galeriaImagem.classList.add("galeria__imagem");
  galeriaImagem.setAttribute("src",urlImagem);

  return galeriaImagem;
}

function montaGaleriaNome (nome) {
  var galeriaNome = document.createElement("div");
  galeriaNome.classList.add("galeria__descricao");
  galeriaNome.textContent = nome;

  return galeriaNome;
  
}

function montaGaleriaPreco (preco) {
  var galeriaPreco = document.createElement("div");
  galeriaPreco.classList.add("galeria__preco");
  galeriaPreco.textContent = preco;
  
  return galeriaPreco;
}

function montaGaleriaLink (urllink) {
  var galeriaLink = document.createElement("a");
  galeriaLink.setAttribute("href",urllink);
  galeriaLink.classList.add("galeria__verproduto","link");
  galeriaLink.textContent = "Ver produto";

  return galeriaLink;
}