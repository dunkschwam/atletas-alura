function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Cria um novo elemento div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
          <p class="descriçao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
      `;
    }
  
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }
 