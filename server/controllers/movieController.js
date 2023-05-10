const connection = require('../services/db');

exports.findAll = (req, res) => {
    connection.query('SELECT * FROM movie' ,
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results));
        });
};