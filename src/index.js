import {trendingmovie, showmovie} from"../components/function"

let ran = Math.floor(Math.random() * 9) + 1;

const url = `https://api.themoviedb.org/3/movie/popular?api_key=9db190054bf203144a8b44b46857dfa8&language=en-US&page=${ran}`;

let x = trendingmovie(url)

// console.log(x)
// showmovie(x)
import "../styles/style.css"