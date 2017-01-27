
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', table  =>  {
    table.increments();
    table.text('character');
    table.text('img_url');
    table.text('option_1');
    table.text('option_2');
    table.text('option_3');
    table.text('option_4');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters')
};
