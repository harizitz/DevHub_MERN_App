import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./read_design.css";
import Course from "./Course";
import Internship from "./Internship";
import { useState } from "react";
export default function ReadData() {
  const [hireorcourse, sethireorcourse] = useState("Upload Hiring..!");
  const hire = () => {
    sethireorcourse("Upload Hiring..!");
  };
  const course = () => {
    sethireorcourse("Upload Course..!");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });
  return (
    <div className="FILLDETAILS">
      <div>
        <h2 className="heady">{hireorcourse}</h2>
        <button onClick={hire} className={hireorcourse==="Upload Hiring..!"?"activebtn":"offbtn"}>Hirings</button>
        <button onClick={course} className={hireorcourse!=="Upload Hiring..!"?"activebtn":"offbtn"}>Courses</button>
      </div>
      <center>
        {hireorcourse === "Upload Hiring..!" ? <Internship /> : <Course />}
        </center>
    </div>
  );
}
