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
        jsonTest.innerHTML += `
        
        `
        return title;
    }
});

