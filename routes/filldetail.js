const router = require("express").Router();
let Course = require("../models/Course");
let Hire = require("../models/Hire");


router.route("/").post((req, res) => {
  const course = () => {
    // console.log(req.body);
    const coursename = req.body.coursename;
    const author = req.body.author;
    const duration = req.body.duration;
    const publisher = req.body.publisher;
    const imgurl = req.body.imgurl;
    const couponcode = req.body.couponcode;
    const courselink = req.body.courselink;
    const dateposted = Date.parse(req.body.dateposted);
    const newCourse = new Course({
      coursename,
      author,
      duration,
      publisher,
      imgurl,
      couponcode,
      courselink,
      dateposted,
    });
    newCourse
      .save()
      .then(() => res.json("Course added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  };
  const hiring = () => {
    const companyname = req.body.companyname;
    const role = req.body.role;
    const location = req.body.location;
    const emptype = req.body.emptype;
    const imgurl = req.body.imgurl;
    const qualification = req.body.qualification;
    const complink = req.body.complink;
    const applylink = req.body.applylink;
    const dateposted = Date.parse(req.body.dateposted);
    const newHire = new Hire({
      companyname,
      role,
      location,
      emptype,
      imgurl,
      qualification,
      complink,
      applylink,
      dateposted,
    });
    newHire
      .save()
      .then(() => res.json("Hiring added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  };
  req.body.coursename ? course() : hiring();
});

module.exports = router;
