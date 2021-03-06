const router = require("express").Router();
let Course = require("../models/Course");
router.route("/").get((req, res) => {
  Course.find()
    .sort({ createdAt: -1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
