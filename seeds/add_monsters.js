
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(() => {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'Cookie'},
        {monster_name: 'Tully'},
        {monster_name: 'Oscar'}
      ]);
    });
};
