const router = require("express").Router();
const { populateDB } = require("../controllers/populate");

router.get("/populate", populateDB);

module.exports = router;
