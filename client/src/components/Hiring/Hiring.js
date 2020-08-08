import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Hiring.css";
const HireCard = (props) => {
  return (
    <div className="CARDD">
      <img className="cow" src={props.data.imgurl} alt="" />
      <p className="coursename">{props.data.companyname}</p>
      <p className="author">Role : {props.data.role}</p>
      <p className="author"> Location : {props.data.location}</p>
      <p className="author"> Qualification : {props.data.qualification}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p className="exc"> Employement type : {props.data.emptype}</p>
        <p className="exct">
          Posted On :{" "}
          {props.data.dateposted
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("-")}
        </p>
      </div>
      <p className="comp">
        Company link: <a href={props.data.complink}>Click Here</a>{" "}
      </p>
      <button className="eenrol">
        <a href={props.data.applylink}>Apply Now</a>
      </button>
    </div>
  );
};

export default class Hiring extends Component {
  constructor(props) {
    super(props);
    this.state = { openings: [], loading: true };
  }

  componentDidMount() {
    axios
      .get("/api/hiring/")
      .then((response) => {
        this.setState({ openings: response.data, loading: false });
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
            {" "}
            <h2>Top Companies Hiring</h2>
            <div className="allcord">
              {this.state.openings.map((job) => {
                return <HireCard data={job} key={job._id} />;
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
