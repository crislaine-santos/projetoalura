
function pesquisar() {

      let section = document.getElementById("resultados-pesquisa"); //Esta é a foma que conseguimos acessar as informações que estão no HTML/

      let campoPesquisa = document.getElementById("campo-pesquisa").value

      let resultados = "";

      if (campoPesquisa == " ") {
            section.innerHTML = "<p> Pesquisa Vazia</P>"
            return
      }

      if (campoPesquisa.length <= 2) {
            section.innerHTML = "<p> Digite mais de 2 caracteres</P>"
            return
      }


      var doramasEncontrados = dados.filter(function (dorama) {
            return dorama.titulo.toLowerCase().includes(campoPesquisa.toLowerCase());
      });

      



      for (let dado of dados) {
            console.log(campoPesquisa.length)
            // o "+" dentro do resultados += significa que ele vai listar tudo que temos no nosso "dados.js"
            if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.sinopse.toLowerCase().includes(campoPesquisa.toLowerCase())) {
                  resultados += `  
                  <div class="item-resultado">
            
                        <h2> 
                        ${dado.titulo} 
                        </h2>
                  <p class="descricao-meta"> ${dado.sinopse} </p>
                  <a href=${dado.link}" target="_blank"> Clique aqui para saber mais </a>
            
                  </div>
                  `
            }
      }

      section.innerHTML = resultados;
      
      console.log(doramasEncontrados);
      if (doramasEncontrados.length == 0) {
            resultados += `<p> Não encontrei o dorama pesquisado</P>`
      }

}








function exibirGeneros() {
      const generosUnicos = new Set();
      dados.forEach(dorama => {
          generosUnicos.add(dorama.genero);
      });
  
      const listaGeneros = document.createElement('ul');
      generosUnicos.forEach(genero => {
          const itemLista = document.createElement('li');
          itemLista.textContent = genero;
          listaGeneros.appendChild(itemLista);
      });
  
      // Encontre o elemento onde você quer inserir a lista de gêneros
      const containerGeneros = document.getElementById('container-generos'); // Crie um elemento com esse ID no seu HTML
      containerGeneros.appendChild(listaGeneros);
  }
  
  exibirGeneros();
