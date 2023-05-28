const detailContainer = document.getElementById("detailContainer");
const suggestions = document.getElementById("suggestions");

async function suggestMovies() {
  const movieRes = await fetch(`https://0tkppuy4r3.execute-api.us-east-1.amazonaws.com/deployment/movies/${movieId}`);
  const movie = await movieRes.json();
  const genre = await movie[0].Genre;
  const response = await fetch(`https://0tkppuy4r3.execute-api.us-east-1.amazonaws.com/deployment/movies/${genre}`);
  const responseData = await response.json();
  if (responseData.length == 0) {
    const moviesRes = fetch("https://0tkppuy4r3.execute-api.us-east-1.amazonaws.com/deployment/movies");
    const movies = (await moviesRes).json()
    suggest(await movies, genre, false)
  } else {
    suggest(await responseData, genre, true);
  }
}

function suggest(movieList, genre, found) {
  console.log(movieList.length)
  movieList.map((movie, index) => {
    if (!found && movie.Genre === genre && suggestions.childNodes.length < 10) {
      const card = document.createElement("article");
      card.classList.add("suggestionCard");
      card.setAttribute("key", index);
      card.innerHTML = `
    <img class = "suggestion_img" src="${movie.Url}", alt="${"An image from freepik"}"/>
    <section class="suggestion_content">
      <h3>${movie.MovieName}</h3>
      <p>${movie.Genre}</p>
      <p>
        <Button class="btn" onClick="Redirect(${movie.MovieId})">Read More</Button>
      <p/>
    </section>
                `;
      suggestions.appendChild(card);
    }
  });
}

function Redirect(MovieId) {
  location.href = `detail.html?movieId=${MovieId}`;
}
suggestMovies();