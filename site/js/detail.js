const container = document.getElementById("detailContainer");

document.getElementById("userInfoDetail").innerText = localStorage.getItem('username');

function logout(){
    let info = JSON.parse(localStorage.getItem('authInfo'));
    fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'], {
      method:'POST',
      headers:{
        'Content-type':'application/x-www-form-urlencoded'
      }
    })
    .then((data) => {
      location.href = "http://127.0.0.1:5500/site/login.html";
    })

    localStorage.setItem('state', "LoggedOut");
  }

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const movieId = urlParams.get('movieId');

getMovieDetails()

async function getMovieDetails(){
    const response = await fetch(`https://0tkppuy4r3.execute-api.us-east-1.amazonaws.com/deployment/movies/${movieId}`);
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
