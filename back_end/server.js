const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 8080; //default port is 8080
//Tell our app to use bodyParser when receiving requests

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const recipes_routes = require('./routes/recipes');




app.use('/api/recipes', recipes_routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});



