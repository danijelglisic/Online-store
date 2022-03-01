const knex = require("../db/db");

const Article = {
  category: async (parent, args, {}) => {
    const category = await knex
      .select("id", "name", "image_url", "parent_id")
      .from("category")
      .where("id", parent.category_id);

    console.log("ovo je u resolveru za artikal: >>> ", parent);
    console.log("kategorija je: >>> ", category);
    return category[0];
  },
};

module.exports = Article;
