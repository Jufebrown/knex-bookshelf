
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {hero_name: 'Conan'},
        {hero_name: 'Captain Kirk'},
        {hero_name: 'Link'}
      ]);
    });
};
