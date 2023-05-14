//Call an external api to request a movie
exports.extMovie = async (movieName) => {
    const url = 'https://advanced-movie-search.p.rapidapi.com/search/movie?query='+movieName;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2fa914ea48mshdf622b370dd8d7ep134f5fjsn03b3e4a17f35',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }
}

