require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

//app.use('/api', routes);
const allowedOrigins = ['https://d3ql6e0lw3omji.cloudfront.net',  'http://advanced-movie-search.p.rapidapi.com'];

const corsOptions = {
    origin: function (origin, callback){
        if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
        
    }
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const port = process.env.PORT;

routes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`);
});

module.exports = app;