
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles', (table) => {
      table.increments('battle_id').primary()
      table.string('battle_location').notNullable()
      table.foreign('monster_id')
      table.foreign('hero_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('battles')
};
