const knex = require("../db/db");

const Query = {
  articles: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const articles = await knex
      .select("id", "name", "image_url", "price", "category_id")
      .from("article");

    return articles;
  },
  article: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const article = await knex
      .select("id", "name", "image_url", "price", "category_id")
      .from("article")
      .where("id", args.id);

    console.log(">>>>>", article);
    return article[0];
  },
  cart: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const article = await knex
      .select("id", "article_id", "cart_id", "amount")
      .from("cart_articles");

    console.log(">>>>>", article);
    return article;
  },
  orders: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const article = await knex
      .select("id", "article_id", "order_id", "amount")
      .from("order_articles");

    console.log(">>>>>", article);
    return article;
  },
  categories: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const category = await knex
      .select("id", "name", "image_url")
      .from("category");

    console.log(">>>>>Ovo je u category??????", category);
    return category;
  },
  category: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const category = await knex
      .select("id", "name", "image_url")
      .from("category")
      .where("id", args.id);

    console.log(">>>>>Ovo je u category??????", category);
    return category[0];
  },

  articlesBetween: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const articles = await knex("article").whereBetween("price", [
      args.min,
      args.max,
    ]);

    return articles;
  },

  articlesInCart: async (parent, args, {}) => {
    console.log(">>>>>", args);
    const articlesIdArray = await knex
      .select("article_id")
      .from("cart_articles")
      .where("cart_id", args.cart_id);

    console.log(">Svi idijevi>>>>", articlesIdArray);

    let fullArticle = await knex
      .select()
      .from("article")
      .whereIn(
        "id",
        articlesIdArray.map((id) => id.article_id)
      );

    console.log(">Citav artikal>>>", fullArticle);
    return fullArticle;
  },
  articlesSortBy: async (parent, { column, direction }, {}) => {
    console.log("column: ", column, " directiom: ", direction);
    const articles = await knex("article").orderBy(column, direction);

    return articles;
  },

  //knex('table').

  articlesSearch: async (parent, { param }, {}) => {
    //console.log("column: ", column, " directiom: ", direction);
    const articles = await knex("article").where("name", "like", `%${param}%`);

    return articles;
  },
  articlesFilter: async (
    parent,
    {
      search,
      category_ids,
      price_min,
      price_max,
      column,
      direction,
      limit,
      offset,
    },
    ctx
  ) => {
    if (
      category_ids === null ||
      category_ids.length < 1 ||
      category_ids[0] === ""
    ) {
      const allCategoryIds = await knex.select("id").from("category");
      category_ids = allCategoryIds.map((id) => id.id);
    }

    const articles = await knex
      .select()
      .from("article")
      .where("name", "like", `%${search || ""}%`)
      .andWhere("category_id", "in", category_ids)
      .andWhere("price", ">", price_min || 0)
      .andWhere("price", "<", price_max || 999999999990)
      .orderBy(column || "name", direction || "asc")
      .limit(limit || 6)
      .offset(offset || 0);
    return articles;
  },
  lastCartId: async (parent, { param }, {}) => {
    //console.log("column: ", column, " directiom: ", direction);
    const articles = await knex("cart");

    id = articles[articles.length - 1].id;

    return id;
  },
  allPurchases: async (parent, {}, {}) => {
    const orders = await knex("order");
    return orders;
  },
  purchase: async (parent, { order_id }, {}) => {
    console.log(">>>>>", order_id);
    const articlesIdArray = await knex
      .select("article_id")
      .from("order_articles")
      .where("order_id", order_id);

    console.log(">Svi idijevi>>>>", articlesIdArray);

    let fullArticle = await knex
      .select()
      .from("article")
      .whereIn(
        "id",
        articlesIdArray.map((id) => id.article_id)
      );

    console.log(">Citav artikal>>>", fullArticle);
    return fullArticle;
  },
};

module.exports = Query;
