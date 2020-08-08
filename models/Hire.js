const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hireSchema = new Schema(
  {
    companyname: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    emptype: { type: String, required: true },
    imgurl: { type: String, required: true },
    qualification: { type: String, required: true },
    complink: { type: String, required: true },
    applylink: { type: String, required: true },
    dateposted: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Hire = mongoose.model("Hire", hireSchema);

module.exports = Hire;
