const Sequelize = require("sequelize");

const sequelize = new Sequelize("test_db", "spaniard", "12345", {
  host: "172.17.0.1", // process.env.PG_HOST,
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
