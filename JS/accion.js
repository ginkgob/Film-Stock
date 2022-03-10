
const requestURL = "../JSON/movies.json";

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
};

fetchMoviesJSON().then(movies => {
    //console.log(movies);
    for (let index = 0; index < movies.peliculas.length; index++) {
        //console.log(movies.peliculas[index]);
        let title = movies.peliculas[index].name;
        let img = movies.peliculas[index].image;
        let alt = movies.peliculas[index].imgAlt;
        let rate=movies.peliculas[index].rating;
        moviesDisplay.innerHTML += `
        <div class="container">
            <img class="posters" src="${img}" alt="${alt}">
            <p class="movieTitle">${title}</p>
            <div class="overlay" onclick="displayPopup()">
                <img src="./img/SVG/star.svg">
                <p>${rate}</p>
            </div>
        </div>
                    `
                }
    moviesDisplay.innerHTML += `
    <div id="addMovies" class="posters">
        <img id="addIcon" src="./img/SVG/plusIcon.svg">
    </div>
        `
    });

window.onscroll = function() {displayTopButton()};
let topButton = document.getElementById('topbtn');
    
function displayTopButton () {
    if (document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    }
    if (document.documentElement.scrollTop <= 20) {
        topButton.style.display = 'none';
    }
}

topButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})


