
function pesquisar() {  //Função para pesquisar os doramas 

      let section = document.getElementById("resultados-pesquisa"); //Esta é a forma que conseguimos acessar as informações que estão no HTML/

      let campoPesquisa = document.getElementById("campo-pesquisa").value

      let resultados = "";

      if (campoPesquisa == " ") {
            section.innerHTML = "<p>Pesquisa Vazia</P>"
            return
      }

      if (campoPesquisa.length <= 2) {
            section.innerHTML = "<p>Digite mais de 2 caracteres</P>"
            return
      }



      let doramasEncontrados = dados.filter(function (dorama) {
            console.log(limparTexto(campoPesquisa));            
            let campoPesquisaLimpo = limparTexto(campoPesquisa);
            let generoLimpo = limparTexto(dorama.genero);
            return generoLimpo.includes(campoPesquisaLimpo); //"toLowerCase()"Torna tudo minusculo para comparar e encontrar os doramas
      });               //era titulo


      for (let dado of dados) {
            console.log(campoPesquisa.length)
            // o "+" dentro do resultados += significa que ele vai listar tudo que temos no nosso "dados.js"
            let campoPesquisaLimpo = limparTexto(campoPesquisa);
            let generoLimpo = limparTexto(dado.genero);

            if (generoLimpo.includes(campoPesquisaLimpo)) {  
                  resultados += `  
                  <div class="item-resultado">
            
                        <h2> 
                        ${dado.titulo} 
                        </h2>
                  <h4 class="descricao-meta"> ${dado.sinopse} </h4>
                  <a href=${dado.link}" target="_blank"> Clique aqui para saber mais </a>
            
                  </div>
                  `
            }
      }

      console.log(doramasEncontrados);
      if (doramasEncontrados.length == 0) {
            resultados += `<p> Não encontrei o dorama pesquisado</P>`
      }

      section.innerHTML = resultados;

      

}

function limparTexto(texto) {   //"texto" esta fazendo referencia ao campoPesquisa que ele esta limpando.
      return texto.toLowerCase()
                  .replace(/\s/g, '')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, "");

}


function exibirGeneros() {   //Função para exibir todos generos do nosso "banco"
      const generosUnicos = new Set();
      dados.forEach(dorama => {
            generosUnicos.add(dorama.genero);
      });

      const listaGeneros = document.createElement('ul'); //cria uma lista 
      generosUnicos.forEach(genero => {
            const itemLista = document.createElement('li');
            itemLista.textContent = genero;
            listaGeneros.appendChild(itemLista);
      });

      // Encontra o elemento onde você quer inserir a lista de gêneros
      const containerGeneros = document.getElementById('container-generos');
      containerGeneros.appendChild(listaGeneros); //appendChild(listaGeneros) significa "adicionar como filho".
}

exibirGeneros();
