import React, { Component } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hire from "../../assets/hire.svg";
import Resources from "./Resources/Resources";
export default class Home extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <div className="HOME">
        <div className="flexrow">
          <div className="topdiv">
            <img data-aos="fade-right" className="hire" src={hire} alt="" />
          </div>
          <div data-aos="fade-left" className="topdiv">
            The <span className="hub">DevHub</span> is a website which enables
            computer science enthusiast students and professionals to find{" "}
            <span className="hub">job openings</span> in different organisations
            and internship offerings. It also provides 100%{" "}
            <span className="hub">free coupons</span> for Udemy courses and
            other online courses <br />
            Confussed what to do to achieve your goal?
            <br /> Select which job role you want to achieve and find a{" "}
            <span className="hub">roadmap</span> for it{" "}
          </div>
          <br />
        </div>
        <div >
          <Resources />
        </div>
      </div>
    );
  }
}
