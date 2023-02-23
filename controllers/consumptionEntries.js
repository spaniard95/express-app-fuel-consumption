const consumptionEntry = require("../models/consumptionEntry");

//get all consumptionEntries
exports.getConsumptionEntries = (req, res, next) => {
  consumptionEntry
    .findAll()
    .then((consumptionEntries) => {
      res.status(200).json({ consumptionEntries: consumptionEntries });
    })
    .catch((err) => console.log(err));
};

//create consumptionEntry
exports.createConsumptionEntry = (req, res, next) => {
  const kmTraveled = req.body.kmTraveled;
  const costPayed = req.body.costPayed;
  const pricePerLitre = req.body.pricePerLitre;
  consumptionEntry
    .create({
      kmTraveled: kmTraveled,
      costPayed: costPayed,
      pricePerLitre: pricePerLitre,
    })
    .then((result) => {
      console.log("added consumption");
      res.status(201).json({
        message: "consumptionEntry created successfully!",
        consumptionEntry: result,
      });
    })
    .catch((err) => {
      console.log("added consumption");
      console.log(err);
    });
};
