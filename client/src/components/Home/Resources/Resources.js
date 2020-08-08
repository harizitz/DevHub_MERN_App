import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Resources.css";
import {
  cpdf,
  cpppdf,
  pythonpdf,
  csharppdf,
  mysqlpdf,
  javapdf,
  mongodbpdf,
  androidpdf,
  reactpdf,
  csspdf,
  htmlpdf,
  jspdf,
  angularpdf,
  reduxpdf,
  awspdf,
  phppdf,
  jquerypdf,
  gitpdf,
  rpdf,
  nodejspdf,
  bigdataanalyticspdf,
  reactnativepdf,
  expressjspdf,
  mlpdf,
} from "../../../assets/pdfimport";
export default function Resources() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const resource = [
    {
      label: "C",
      image: "https://cdn.iconscout.com/icon/free/png-256/c-57-1175191.png",
      link: cpdf,
    },
    {
      label: "C++",
      image: "https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png",
      link: cpppdf,
    },
    {
      label: "JAVA",
      image:
        "https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png",
      link: javapdf,
    },
    {
      label: "Python",
      image: "https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png",
      link: pythonpdf,
    },
    {
      label: "C#",
      image: "https://cdn.iconscout.com/icon/free/png-256/c-sharp-2-569585.png",
      link: csharppdf,
    },
    {
      label: "PHP",
      image: "https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png",
      link: phppdf,
    },
    {
      label: "jQuery",
      image: "https://cdn.iconscout.com/icon/free/png-256/jquery-9-1175154.png",
      link: jquerypdf,
    },

    {
      label: "AWS",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png",
      link: awspdf,
    },
    {
      label: "Git",
      image: "https://cdn.iconscout.com/icon/free/png-256/git-13-569377.png",
      link: gitpdf,
    },
    {
      label: "R",
      image: "https://cdn.iconscout.com/icon/free/png-256/r-5-283170.png",
      link: rpdf,
    },
    {
      label: "Big Data",
      image:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/big-data-analytics-1705998-1448589.png",
      link: bigdataanalyticspdf,
    },
    {
      label: "Machine Learning",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/brain-1890874-1601180.png",
      link: mlpdf,
    },
    {
      label: "Android",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/android-247-1175275.png",
      link: androidpdf,
    },
    {
      label: "HTML5",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/html-1693579-1442620.png",
      link: htmlpdf,
    },
    {
      label: "CSS3",
      image: "https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png",
      link: csspdf,
    },
    {
      label: "Javascript",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
      link: jspdf,
    },
    {
      label: "AngularJS",
      image: "https://cdn.iconscout.com/icon/free/png-256/angular-3-226070.png",
      link: angularpdf,
    },
    {
      label: "React",
      image: "https://cdn.iconscout.com/icon/free/png-256/react-226053.png",
      link: reactpdf,
    },
    {
      label: "Redux",
      image: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
      link: reduxpdf,
    },
    {
      label: "React Native",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png",
      link: reactnativepdf,
    },
    {
      label: "nodeJs",
      image: "https://cdn.iconscout.com/icon/free/png-256/nodejs-1-226034.png",
      link: nodejspdf,
    },

    {
      label: "Expressjs",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png",
      link: expressjspdf,
    },

    {
      label: "MySQL",
      image: "https://cdn.iconscout.com/icon/free/png-256/mysql-21-1174941.png",
      link: mysqlpdf,
    },
    {
      label: "mongoDB",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
      link: mongodbpdf,
    },
  ];
  return (
    <div data-aos="zoom-in" className="Resources">
      <div>
        <h2>Some Useful Resources</h2>
      </div>{" "}
      <div className="sourcelinks">
        {resource.map((key, index) => {
          return (
            <div key={index} className="container">
              <img className="image" src={resource[index].image} alt="" />
              <p>{resource[index].label}</p>
              <div className="middle">
                <button className="text">
                  <a href={resource[index].link} download>
                    Download
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
