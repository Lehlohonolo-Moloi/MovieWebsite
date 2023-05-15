require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

//app.use('/api', routes);

const corsOptions = {
    origin:"http://localhost:8081"
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