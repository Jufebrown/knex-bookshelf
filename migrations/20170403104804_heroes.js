
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('heroes', (table) => {
      table.increments('hero_id').primary()
      table.string('hero_name').notNullable()
      table.
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('heroes')
};
