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
        test.innerHTML += `
            <div>
                <img class="posters" src="${img}" alt="${alt}">
                <p class="movieTitle">${title}</p>
            </div>
    `
    }
});


{/* <div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div> */}