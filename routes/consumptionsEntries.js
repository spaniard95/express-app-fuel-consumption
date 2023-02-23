const controller = require("../controllers/consumptionEntries");
const router = require("express").Router();

// CRUD Routes /users
router.get("/", controller.getConsumptionEntries); // /users
// router.get("/:userId", controller.getUser); // /users/:userId
router.post("/", controller.createConsumptionEntry); // /users
// router.put("/:userId", controller.updateUser); // /users/:userId
// router.delete("/:userId", controller.deleteUser); // /users/:userId

module.exports = router;
