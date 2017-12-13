exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        {
          id: 0,
          name: "hot chocolate",
          ingredients: ["cocoa", "milk","whip cream","hot water","ice-cream"  ],
          directions: "pour milk in cocoa and stir"
        }
      ]);
    });
};
