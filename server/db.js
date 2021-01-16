const Pool = require("pg").Pool;

const pool = new Pool({
  user: "perntodo",
  password: "6`fGFD`XE_N(2!fJ",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;