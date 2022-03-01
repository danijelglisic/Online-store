const knex = require("../db/db");
const { v4 } = require("uuid");

const Mutation = {
  addToCart: async (parent, { article_id, cart_id, amount }, ctx) => {
    let add = {
      id: v4(),
      article_id: article_id,
      cart_id: cart_id,
      amount: amount,
    };

    await knex("cart_articles").insert(add);
    console.log("POLJA SU:: ", amount, article_id, cart_id);
    return add;
  },
  buy: async (parent, { cart_id }, ctx) => {
    const cart = await knex("cart_articles").select().where("cart_id", cart_id); //citanje proizvoda iz korpe

    console.log("ovo je cart", cart);

    const order_id = v4(); //id za order

    await knex("order").insert({ id: order_id }); //dodavanje nove porudzbe

    console.log("ovo je orderID", order_id);

    order_array = cart.map((cartOne) => {
      return {
        id: v4(),
        order_id: order_id,
        article_id: cartOne.article_id,
        amount: cartOne.amount,
      };
    });

    console.log("ovo je orderniz", order_array);

    order_array.forEach(async (row) => {
      await knex("order_articles").insert(row);
    });

    await knex("cart").insert({ id: v4() });

    return true;
  },

  removeFromCart: async (parent, { article_id, cart_id }, ctx) => {
    await knex("cart_articles")
      .where({
        article_id: article_id,
        cart_id: cart_id,
      })
      .del();
    return true;
  },
};

module.exports = Mutation;
