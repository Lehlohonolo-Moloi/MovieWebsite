const connection = require('../services/db');

const BASE_QUERY = `
SELECT movie.movie_name MovieName,
       movie.release_date ReleaseDate,
       genre.description Genre,
       production_company.prod_name 'Production Company',
       CONVERT(YEAR(movie.release_date), CHAR) Year,
       movie.image_url Url
FROM movie, genre, production_company
WHERE movie.genre_id = genre.genre_id
  AND movie.prod_id = production_company.prod_id\n`;

const LABELS_TO_DB_COLUMNS = new Map([
    ['genre', 'genre.description'],
    ['year', 'CONVERT(YEAR(movie.release_date), CHAR)'],
    ['production company', 'production_company.prod_name'],
    ['moviesummary', 'movie.movie_summary'],
    ['moviename', 'movie.movie_name']
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