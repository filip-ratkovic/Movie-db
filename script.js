const genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US'
const popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1'

const genresEl = document.getElementById('genres-list');
const homePage = document.getElementById('home-main');

async function getGenresListData() {
    const genresData = await fetch(genresURL);
    const genresDataRes = await genresData.json();
    getGenresList(genresDataRes);
}

function getGenresList(data) {
    const genresUL = document.createElement('ul');
    const genres = data.genres
    genres.forEach((genre) => {
        const genreLi = document.createElement('li');
        genreLi.innerHTML = genre.name
        genresEl.appendChild(genreLi)
    })
}

async function getPopularMovieData() {
    const popularData = await fetch(popularURL);
    const popularDataRes = await popularData.json();
    getPopularMovie(popularDataRes);
}

function getPopularMovie(data) {
    // data.results.forEach((movie) => {
    //     const title = document.createElement('h1')
    //     const img = document.createElement('img')
    //     const text = document.createElement('p')

    //     title.innerHTML = movie.title;
    //     img.src = `https://api.themoviedb.org/t/p${movie.poster_path}`
    //     text.innerHTML = movie.overview;

    //     homePage.appendChild(title, img, text);
    // })
}

getPopularMovieData()

function toggleGenres() {
  const genresList = document.getElementById("genres-list");
  const defaultDisplay = window
    .getComputedStyle(genresList)
    .getPropertyValue("display");

  genresList.style.display = defaultDisplay;

  genresList.style.display === "none"
    ? (genresList.style.display = "block")
    : (genresList.style.display = "none");
    getGenresListData()
}
