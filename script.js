const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1'
const text = 'spiderman'
async function  fun() {
    const res =await fetch (`
    https://api.themoviedb.org/3/search/spiderman?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1&include_adult=false&query=spiderman`);
    const res2 = await res.json();
    console.log(res2)
}

fun()