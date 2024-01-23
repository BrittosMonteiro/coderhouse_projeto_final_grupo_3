window.addEventListener("DOMContentLoaded", () => {
  // FAZ O FETCH NA API E RETORNA UM FILME ESPECÍFICO A PARTIR DO ID
  // CENÁRIO: USUÁRIO CLICA EM ALGUM FILME DE UMA LISTAGEM - POR EXEMPLO, OS FILMES DA HOME
  
  // REQUISIÇÃO COM VARIÁVEIS, CONTEÚDO DINÂMICO, MENOS TRABALHO PARA MANUTENÇÃO - TODAS AS INFORMAÇÕES DE GÊNERO, RECOMENDAÇÕES, TRAILER E ONDE ASSISTIR
  // fetch(
  //   `${API_FULL_ROUTE}/movie/${MOVIE_ID}?append_to_response=genre%2Crecommendations%2Cvideos%2Cwatch%2Fproviders&language=${DEFAULT_LANGUAGE}`,
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  // BUSCAR UM FILME A PARTIR DO FORMULÁRIO
  // const search_movie = document.getElementById("search_text").value;
  // fetch(
  //   `${API_FULL_ROUTE}/search/movie?query=${search_movie}&include_adult=false&language=${DEFAULT_LANGUAGE}&page=${current_page}`,
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
});
