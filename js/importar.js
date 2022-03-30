
async function populate() {

    const requestURL = "https://gabrielgcosta83.github.io/Desafio-Alura-FrontEnd/js/json/produtos.json"

    const request = new Request(requestURL);
    const response = await fetch(request);
    const produtos = await response.json();
    console.log(produtos);
  }
  
  populate();