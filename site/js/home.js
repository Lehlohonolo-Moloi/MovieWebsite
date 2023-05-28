const search = document.getElementById("search");
const container = document.getElementById("cardContainer");

getMovies();

async function getMovies(){
    const response = await fetch("https://0tkppuy4r3.execute-api.us-east-1.amazonaws.com/deployment/movies");
    const responseData = await response.json();

    showMovies(await responseData);
}

function showMovies(movieList){
    movieList.map((movie, index) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.setAttribute("key", index);
        card.innerHTML = `
        <img src="${movie.Url}", alt="${"An image from freepik"}"/>
        <section class="card_content">
            <h3>${movie.MovieName}</h3>
            <p>${movie.Genre}</p>
            <p>
                <Button class="btn" onClick="Redirect(${movie.MovieId})">Read More</Button>
            <p/>
        </section>
        `;
        container.appendChild(card);
    });
}

function Redirect(MovieId){
    location.href=`detail.html?movieId=${MovieId}`;
}