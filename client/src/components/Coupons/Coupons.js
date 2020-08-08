import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Coupons.css";
const CouponCard = (props) => {
  return (
    <div className="CARDD">
      <img className="cow" src={props.data.imgurl} alt="" />
      <p className="coursename">{props.data.coursename}</p>
      <p className="author">Author : {props.data.author}</p>
      <p className="author"> Duration : {props.data.duration}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p className="exc"> Available on {props.data.publisher}</p>
        <p className="exct">
          Posted On :{" "}
          {props.data.dateposted
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("-")}
        </p>
      </div>
      <p className="code">COUPON CODE : {props.data.couponcode}</p>
      <button className="eenrol">
        <a href={props.data.courselink}>Enroll Now</a>
      </button>
    </div>
  );
};

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [], loading: true };
  }

  componentDidMount() {
    axios
      .get("/api/coupons/")
      .then((response) => {
        this.setState({ courses: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="COUPON">
        {this.state.loading ? (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : (
          <>
            <h2>Top Courses For Free</h2>
            <div className="allcord">
              {this.state.courses.map((e) => {
                return <CouponCard data={e} key={e._id} />;
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
