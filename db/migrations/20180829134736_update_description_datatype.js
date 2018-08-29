exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('breed_groups', (table) => {
      table.text('breed_description');
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('breed_groups', (table) => {
      table.dropColumn('breed_description');
    })
  ]);
};