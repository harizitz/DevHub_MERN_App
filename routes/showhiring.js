const router = require("express").Router();
let Hire = require("../models/Hire");
router.route("/").get((req, res) => {
  Hire.find()
    .sort({ createdAt: -1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
