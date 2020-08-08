import React, { useState } from "react";
import axios from "axios";
import "./read_design.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
export default function Internship() {
  const [data, setdata] = useState({
    companyname: "",
    role: "",
    location: "",
    emptype: "",
    imgurl: "",
    qualification: "",
    complink: "",
    applylink: "",
    dateposted: new Date(),
  });
  const update = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const Submit = (e) => {
    e.preventDefault();
    alert("Created Successfully");
    const hire = {
      companyname: data.companyname,
      role: data.role,
      location: data.location,
      emptype: data.emptype,
      imgurl: data.imgurl,
      qualification: data.qualification,
      complink: data.complink,
      applylink: data.applylink,
      dateposted: data.dateposted,
    };

    axios.post("/api/filldetail/", hire).then((res) => console.log(res.data));

    window.location = "/hiring";
  };
  return (
    <div>
      <form onSubmit={Submit}>
        <div className="Outline">
          <h2 className="head2">Hirings</h2>

          <p>Company name :</p>
          <input
            type="text"
            name="companyname"
            onChange={update}
            placeholder="Enter the Course Name"
          />
          <p>Role :</p>
          <input
            type="text"
            onChange={update}
            name="role"
            placeholder="eg: Associate Developer"
          />
          <p>Location : </p>
          <input
            type="text"
            onChange={update}
            name="location"
            placeholder="City, Country"
          />
          <p>Employement Type :</p>
          <select name="emptype" onChange={update}>
            <option value="" default hidden>
              Select Type
            </option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="internship">Internship</option>
          </select>
          <p>Image url :</p>
          <input
            type="text"
            onChange={update}
            name="imgurl"
            placeholder="Company logo (preferred)"
          />
          <p>Qualification :</p>
          <input
            type="text"
            onChange={update}
            name="qualification"
            placeholder="minimum qualification required"
          />
          <p>Company Link :</p>
          <input
            type="text"
            onChange={update}
            name="complink"
            placeholder="Company website or Linkedin profile"
          />
          <p>Applying Link :</p>
          <input
            type="text"
            onChange={update}
            name="applylink"
            placeholder="Enter the link to apply"
          />
          <p>Date Posted :</p>
          <DatePicker
            className="dpicker"
            dateFormat="dd/MM/yyyy"
            selected={data.dateposted}
            onChange={(e) =>
              setdata({
                ...data,
                dateposted: e,
              })
            }
          />
          <button className="btnadd">Add</button>
        </div>
      </form>
    </div>
  );
}
