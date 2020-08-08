import React from "react";
import { useState } from "react";
import "./Roles.css";

import cover from "../../assets/jobroledefault.png";
import image0 from "../../assets/fullstack.png";
import image1 from "../../assets/Bigdata.jpg";
import image2 from "../../assets/AI.jpg";
import image3 from "../../assets/datascience.jpg";
import image4 from "../../assets/cybersecurity.jpg";
import image5 from "../../assets/digitalmarketing.jpg";
import image6 from "../../assets/cloud.jpg";
import image7 from "../../assets/devops.jpg";
import image8 from "../../assets/ML.jpg";
import image9 from "../../assets/blockchain.jpg";
export default function Roles() {
  const role = [
    { jobrole: "Full Stack Web Developer", img: image0 },
    { jobrole: "Big Data Engineer", img: image1 },
    { jobrole: "AI Engineer", img: image2 },
    { jobrole: "Data Scientist", img: image3 },
    { jobrole: "Cybersecurity Architect", img: image4 },
    { jobrole: "Digital Marketing Specialist", img: image5 },
    { jobrole: "Cloud Architect", img: image6 },
    { jobrole: "DevOps Engineer", img: image7 },
    { jobrole: "Machine Learning Engineer", img: image8 },
    { jobrole: "Blockchain Developer", img: image9 },
  ];
  const [roleindex, setroleindex] = useState(null);
  const [images, setimage] = useState(cover);

  return (
    <div className="ROLES">
      <div className="btns">
        {role.map((key, index) => {
          return (
            <button
            key={index}
              onClick={() => {
                setroleindex(index);
                setimage(role[index].img);
              }}
              className={roleindex !== index ? "inactive" : "active"}
            >
              {role[index].jobrole}
            </button>
          );
        })}
      </div>
      <div className="mapimg">
        <h2>
          {roleindex === null
            ? "Select your dream job role"
            : role[roleindex].jobrole}
        </h2>
        <img src={images} alt="roadmap" />
      </div>
    </div>
  );
}
