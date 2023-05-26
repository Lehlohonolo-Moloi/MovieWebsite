const connection = require('../services/db');

const BASE_QUERY = `
SELECT movie_name MovieName,
       release_date ReleaseDate,
       description Genre,
       prod_name 'Production Company',
       CONVERT(YEAR(release_date), CHAR) Year,
       image_url Url
FROM Movie, Genre, Production_Company
WHERE Movie.genre_id = Genre.genre_id
  AND Movie.prod_id = Production_Company.prod_id\n`;

const LABELS_TO_DB_COLUMNS = new Map([
    ['genre', 'Genre.description'],
    ['year', 'CONVERT(YEAR(Movie.release_date), CHAR)'],
    ['production company', 'Production_Company.prod_name'],
    ['moviesummary', 'Movie.movie_summary'],
    ['moviename', 'Movie.movie_name']
]);

const createFilterQuery = (json, searchPhrase) =>{
    let query = BASE_QUERY;

    for(const [filter, values] of Object.entries(JSON.parse(json)))
    {
        if (!LABELS_TO_DB_COLUMNS.has(filter.toLowerCase()))
            continue;
        
        const dbColumn = LABELS_TO_DB_COLUMNS.get(filter.toLowerCase());
        
        query += '  AND ';
        if (values instanceof Array)
        {
            query += '(';
            query += values.reduce((result, value)=> result + `${dbColumn} = '${value}' OR `, '').replace(/ OR $/, '');
            query += ')\n';
        }
        else
            query += `${dbColumn} = '${values}'\n`;
    }

    if(searchPhrase)
        query += `  AND ${LABELS_TO_DB_COLUMNS.get('moviename')} REGEXP '${searchPhrase}'`;
    return query;
};

exports.getMatchingMovies = (req, res) => {
    connection.query(createFilterQuery(JSON.stringify(req.body.filters), req.body.search),
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results));
    });
};

exports.getValuesInColumn = (req, res) => {
    if (!req.query.column)
    {
        res.end(JSON.stringify({}));
        return;
    }

    const col = req.query.column;
    connection.query(BASE_QUERY,
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results.map((movie=>movie[col]))));
    });
};