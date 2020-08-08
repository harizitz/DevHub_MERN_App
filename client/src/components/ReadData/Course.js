import React, { useState } from "react";
import "./read_design.css";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
export default function Course() {
  const [data, setdata] = useState({
    coursename: "",
    author: "",
    duration: "",
    publisher: "",
    imgurl: "",
    couponcode: "",
    courselink: "",
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
    const course = {
      coursename: data.coursename,
      author: data.author,
      duration: data.duration,
      publisher: data.publisher,
      imgurl: data.imgurl,
      couponcode: data.couponcode,
      courselink: data.courselink,
      dateposted: data.dateposted,
    };
    axios.post("/api/filldetail/", course).then((res) => console.log(res.data));
    window.location = "/coupons";
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <div className="Outline">
          <h2 className="head2"> Course Coupon</h2>

          <p>Course name :</p>
          <input
            onChange={update}
            type="text"
            name="coursename"
            placeholder="Enter the Course Name"
          />
          <p>Author :</p>
          <input
            onChange={update}
            type="text"
            name="author"
            placeholder="Enter the author of the course"
          />
          <p>Duration : </p>
          <input
            type="text"
            onChange={update}
            name="duration"
            placeholder="(in hours)"
          />
          <p>Publisher :</p>
          <input
            type="text"
            onChange={update}
            name="publisher"
            placeholder="eg: Udemy, Udacity"
          />
          <p>Image url :</p>
          <input
            type="text"
            onChange={update}
            name="imgurl"
            placeholder="Enter the link"
          />
          <p>Coupon Code:</p>
          <input
            type="text"
            onChange={update}
            name="couponcode"
            placeholder="eg: SUMMEROFF"
          />
          <p>Course Link :</p>
          <input
            onChange={update}
            type="text"
            name="courselink"
            placeholder="Enter the course link"
          />
          <p>Date Posted :</p>
          <DatePicker
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
