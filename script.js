const genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US'
const popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1'
const imgURL = "https://image.tmdb.org/t/p/w1280";
const searchURL ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const detailsURL ='https://api.themoviedb.org/3/movie/'
const api_key = '?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US'

const genresEl = document.getElementById('genres-list');
const homePage = document.getElementById('home-main');
const showedMainCont = document.getElementById('showed-main-cont');

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
const movieID = 'https://api.themoviedb.org/3/movie/502356?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US'

async function getPopularMovieData() {
    const popularData = await fetch(popularURL);
    const popularDataRes = await popularData.json();
    // getPopularMovie(popularDataRes);
        getPopularMovie(popularDataRes);
}

function getPopularMovie(data) {
   const mainMovie = data.results[0].id
    // data.results.forEach((movie) => {
        
    //     const card = document.createElement('div');
    //     card.innerHTML = `
    //     <h1>${movie.title}</h1>
    //     <p>${movie.overview}</p>
    //     <img src="${imgURL + movie.poster_path}" alt="">
    //     `

    //     homePage.appendChild(card)
    // })
    getMainMovieData(mainMovie)
}



async function getMainMovieData(movieID) {
    const mainMovieData = await fetch(`${detailsURL}${movieID}${api_key}`);
    const mainMovieDataRes = await mainMovieData.json();
        homePageMovie(mainMovieDataRes);
}

function homePageMovie(data) {
        showedMainCont.style.backgroundImage  = `linear-gradient(to left, rgba(245, 246, 252, 0.0) 0%, rgba(0, 0, 0, 0.9)70% , rgba(0, 0, 0) 100%),
        url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')`
        
   
        showedMainCont.innerHTML = `
        <div class="showed-text-cont">
        <h1>${data.title}</h1>
        <div class="showed-rateDuration" id="showed-rateDuration">
            <div class="showed-rate">
              <i class="fa-solid fa-star"></i>
            <p>${data.vote_average}</p>
            </div>
            <p>${data.release_date.slice(0,4)}</p>
            <p>${data.runtime}</p>
        </div>

        <div class="showed-genres" id='showed-genres'>
       
        </div>

        <div class="showed-overview">
        ${data.overview}
        </div>

        <div class="showed-buttons">
            <button id="watch-btn"> Watch <i class="fa-solid fa-play"></i></button>
            <button id="add-btn"> Add  <i class="fa-solid fa-heart"></i></button>
        </div>
    </div>
        `

        {data.genres.map((genre)=> {
            const showedGenres = document.getElementById('showed-genres');
            const genresLi = document.createElement('li');
            genresLi.innerHTML = genre.name;
            showedGenres.appendChild(genresLi);
         })}


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
