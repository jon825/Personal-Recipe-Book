exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("recipe", function(table) {
    table.increments("id").primary(); // adds incrementing int for id
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .string("name") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required
    table
      .text("ingredients",[]) // adds a string column
      .notNullable(); // and is required
    table
      .text("directions") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe"); // drop table when reverting
};
