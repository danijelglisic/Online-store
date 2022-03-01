/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("article", (table) => {
    table.string("id").notNullable();
    table.string("name").notNullable();
    table.double("price").notNullable();
    table.string("image_url").notNullable();
    table.string("category_id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("article");
};
