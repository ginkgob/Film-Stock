const requestURL = '../JSON/movies.json';

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
};

fetchMoviesJSON().then(movies => {
    //console.log(movies);
    for (let index = 0; index < movies.peliculas.length; index++) { //peliculas es el titulo del JSON
        //console.log(movies.peliculas[index]);
        //console.log(movies.peliculas[index].name);
        let title = movies.peliculas[index].name;
        let img = movies.peliculas[index].image;
        let alt = movies.peliculas[index].altImg;
        let rate=movies.peliculas[index].rating;
        moviesDisplay.innerHTML += `
            <div class="container">
                  <img class="posters" src="${img}" alt="${alt}">
                  <p class="movieTitle">${title}</p>
                <div class="overlay">
                  <img src="./img/SVG/star.svg">
                  <p>${rate}</p>
                </div>
            </div>
    `
    }
});

//no hereda a las nietas, las hijas las pilla bien... 

/*<div>
    <img class="posters" src="${img}" alt="${alt}">
    <p class="movieTitle">${title}</p>
  </div> */

/*<div class="container">
      <img class="posters" src="${img}" alt="${alt}">
      <p class="movieTitle">${title}</p>
    <div class="overlay">
      <img src="./img/star.svg">
      <p>${rate}</p>
    </div>
  </div> */