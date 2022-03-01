const knex = require("../db/db");

const Cart = {
  articles: (parent, args, {}) => {
    return (nesto = knex
      .select()
      .table("category")
      .where({ id: parent.category })
      .then((nesto) => {
        res.json(JSON.stringify(nesto));
        console.log(">>>> ima li sta", nesto);
      }));
  },
};

module.exports = Cart;
