window.addEventListener("DOMContentLoaded", () => {
  const movie_id = window.location.search.split("=")[1];
  const API_ROUTE = "https://api.themoviedb.org";

  // VERSÃO ATUAL ESTÁVEL DA API
  const API_VERSION = "/3";

  // CONCATENAÇÃO DO LINK DA API COM A VERSÃO ESTÁVEL
  const API_FULL_ROUTE = API_ROUTE + API_VERSION;

  // CHAVE NECESSÁRIA PARA FAZER A REQUISIÇÃO (FETCH, REQUEST, RESPONSE)
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDUxNzRkMzcwMGM1YWFiZjIzNWQ2ZDhjZWY1MTQwMyIsInN1YiI6IjY1ODJkMjUyYjM0NDA5NDZlMDFhZWJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3dqemApaRhZuCyX64_RySFq0XePhbyiTtx3RNUVhu08";

  // IDIOMA PADRÃO DOS DADOS RETORNADOS PELA API
  const DEFAULT_LANGUAGE = "pt-BR";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // REQUISIÇÃO COM VARIÁVEIS, CONTEÚDO DINÂMICO, MENOS TRABALHO PARA MANUTENÇÃO - TODAS AS INFORMAÇÕES DE GÊNERO, RECOMENDAÇÕES, TRAILER E ONDE ASSISTIR
  function getMovieData() {
    fetch(
      `${API_FULL_ROUTE}/movie/${movie_id}?append_to_response=genre%2Crecommendations%2Cvideos%2Cwatch%2Fproviders&language=${DEFAULT_LANGUAGE}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const movie_title = document.getElementById("movie_title");
        movie_title.innerText = response.title;
      })
      .catch((err) => console.error(err));
  }

  getMovieData();
});
