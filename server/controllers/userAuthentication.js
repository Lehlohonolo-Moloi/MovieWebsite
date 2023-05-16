const connection = require('../services/db');

exports.authenticate = (req, res) => {
    let query = 'SELECT COUNT(username) FROM User_Credentials WHERE username = '+ req.query.username + ' AND password = ' + req.query.password;
    connection.query( query,
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results));
        });
}