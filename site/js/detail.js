const container = document.getElementById("detailContainer");

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const movieId = urlParams.get('movieId');

getMovieDetails()

async function getMovieDetails(){
    const response = await fetch(`http://localhost:3000/movies/${movieId}`);
    const responseData = await response.json();

    showMovieDetails(await responseData);
    //console.log(responseData);
}

function showMovieDetails(movieDetail){
    const pictureBox = document.createElement("article");
    const detailBox = document.createElement("article");
    pictureBox.classList.add("pictureBox");
    detailBox.classList.add("detailBox");
    
    movieDetail.map((movie, index) => {
        pictureBox.innerHTML = `
            <img src="${movie.Url}", alt="${"An image from freepik"}"/>
        `;
        detailBox.innerHTML = `
            <h3>${movie.MovieName}</h3>
            <p>${movie.MovieSummary}</p>
            <p>${movie.Genre}</p>
            <p>${movie.Production}</p>
        `;
        container.appendChild(pictureBox);
        container.appendChild(detailBox);
    });
    /*
    
    
    */
}