const knex = require("../db/db");

const Category = {
  articles: async (parent, args, {}) => {
    console.log(">>>>>Ovo je u parent??????", parent);
    const category = await knex
      .select("id", "name", "image_url", "price")
      .from("article")
      .where("category_id", parent.id);
    console.log(">>>>>Ovo je u resolveru??????", category);
    return category;
  },
};
module.exports = Category;
