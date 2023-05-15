const search = document.getElementById("search");
const container = document.getElementById("cardContainer");

getMovies();

async function getMovies(){
    const response = await fetch("http://localhost:3000/movies");
    const responseData = await response.json();

    showMovies(await responseData);
}

function showMovies(movieList){
    movieList.forEach((movie, index) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${""}", alt="${""}"/>
        <h3>${movie.MovieName}</h3>
        <p>${movie.Genre}</p>
        `;
        container.appendChild(card);
    });
}