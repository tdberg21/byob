
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('breed_groups', table => {
      table.increments('id').primary();
      table.string('group_name');
      table.string('description');
      table.string('breed_count');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('dog_breeds', table => {
      table.increments('id').primary();
      table.string('breed_name');
      table.string('life_span');
      table.string('bred_for');
      table.string('temperament');
      table.string('weight');
      table.string('height');
      table.integer('group_id').unsigned()
      table.foreign('group_id')
        .references('breed_groups.id');

      table.timestamps(true, true);
    })
  ]);
};


exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('dog_breeds'),
    knex.schema.dropTable('breed_groups')
  ]);
};