window.addEventListener("DOMContentLoaded", () => {
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

  // FILMES POPULARES
  function getMovies() {
    fetch(
      `${API_FULL_ROUTE}/movie/popular?language=${DEFAULT_LANGUAGE}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results.length > 0) {
          const main = document.getElementById("main");
          const movie_list = document.createElement("section");
          movie_list.classList.add("movie_list");

          response.results.map((movie, index) => {
            const movie_box = buildMovieBox(movie);
            movie_list.append(movie_box);
            const hr = document.createElement("hr");
            if (index < response.results.length - 1) {
              movie_list.append(hr);
            }
          });
          main.append(movie_list);
        }
      })
      .catch((err) => console.error(err));
  }

  // CRIA O ELEMENTO
  function buildMovieBox(movie) {
    const box = document.createElement("section");
    box.classList.add("movie_box");

    const description = document.createElement("div");
    description.classList.add("movie_box__description");

    const category = document.createElement("span");
    category.classList.add("movie_box__category");
    category.innerText = "";

    const title = document.createElement("h2");
    title.classList.add("movie_box__title");
    title.innerText = movie.title;

    const resume = document.createElement("p");
    resume.classList.add("movie_box__resume");
    resume.innerText = movie.overview;

    const link = document.createElement("a");
    link.classList.add("movie_box__learn_more");
    link.setAttribute("href", `pages/movie/movie.html?id=${movie.id}`);
    link.innerText = "+DETALHES";

    const cover = document.createElement("img");
    cover.classList.add("movie_box__cover-img");
    cover.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
    );

    description.append(category, title, resume, link);
    box.append(description, cover);

    return box;
  }

  getMovies();
});
