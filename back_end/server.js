const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 8080; //default port is 8080
//Tell our app to use bodyParser when receiving requests

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const recipes_routes = require('./routes/recipes');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/api/recipes', recipes_routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});



