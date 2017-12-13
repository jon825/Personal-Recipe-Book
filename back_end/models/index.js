// Initializing knex and connecting to our db
const knex = require('knex')({
  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'mydb',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Recipe = bookshelf.Model.extend({
    tableName: 'recipe' // what you named your table as
});

module.exports = {
    Recipe
}
