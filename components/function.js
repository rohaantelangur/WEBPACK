const trendingmovie = async (url) => {
  try {
    // let ran = Math.floor(Math.random() * 9) + 1;
    // console.log(ran);
    // const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9db190054bf203144a8b44b46857dfa8&language=en-US&page=${ran}`);
    const res = await fetch(url);
    // console.log('res:', res)
    const data = await res.json();
    // console.log("data:", data.results);
    showmovie(data.results);
    // let d = data.results
    // return d;
  } catch (err) {
    console.log("err:", err);
  }
};

const showmovie = async (data) => {
  // console.log(data);
  const appends = document.querySelector(".master");
  appends.innerHTML = null;
  data.map((el) => {
    let div = document.createElement("div");
    let im = document.createElement("img");
    im.src = "https://image.tmdb.org/t/p/w500" + el.poster_path;
    let p = document.createElement("p");
    p.innerText = el.title;
    let div1 = document.createElement("div");
    div1.setAttribute("class", "seconsd");
    let p1 = document.createElement("p");
    p1.innerText = "Poularity " + el.popularity;
    let p2 = document.createElement("p");
    p2.innerText = "Rating: " + el.vote_average;
    div1.append(p1, p2);
    div.append(im, p, div1);
    appends.append(div);
  });
};

export  {trendingmovie, showmovie};
