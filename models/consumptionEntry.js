const Sequelize = require("sequelize");
const db = require("../util/database");

const consumptionEntry = db.define("consumptionEntry", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  kmTraveled: Sequelize.STRING,
  costPayed: Sequelize.STRING,
  pricePerLitre: Sequelize.STRING,
});

module.exports = consumptionEntry;
