var campoBusca = document.querySelector("#busca");
var galeriaLista = document.querySelectorAll(".galeria__lista")

campoBusca.addEventListener("input", function() {
    var produtos = document.querySelectorAll(".galeria__item");
    
    if (this.value.length > 0) {
        for ( i = 0; i < produtos.length ; i++ ) {
            var Pdescricao = produtos[i].querySelector(".galeria__descricao");
            var descricao = Pdescricao.textContent;
           
            var expressao = new RegExp(this.value, "i");
            if (expressao.test(descricao)) {
                produtos[i].classList.remove("invisivel");
                produtos[i].parentNode.classList.add("galeria__lista___busca");
            }
            else {
                produtos[i].classList.add("invisivel");
            }
        }
    }

    else for (var i = 0; i < produtos.length ; i++) {
        var produto = produtos[i];
        produto.classList.remove("invisivel");
        produto.parentNode.classList.remove("galeria__lista___busca");
        }      
})