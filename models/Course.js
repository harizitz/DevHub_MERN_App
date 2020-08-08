const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    coursename: { type: String, required: true },
    author: { type: String, required: true },
    duration: { type: String, required: true },
    publisher: { type: String, required: true },
    imgurl: { type: String, required: true },
    couponcode: { type: String, required: true },
    courselink: { type: String, required: true },
    dateposted: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
