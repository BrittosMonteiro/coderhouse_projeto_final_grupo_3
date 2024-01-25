import { API_FULL_ROUTE, DEFAULT_LANGUAGE, options } from "./config.js";

window.addEventListener("DOMContentLoaded", () => {
  const movie_id = window.location.search.split("=")[1];

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
