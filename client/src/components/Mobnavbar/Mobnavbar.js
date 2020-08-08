import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Mobnavbar.css";
export default class Mobnavbar extends Component {
  render() {
    return (
      <div className="mobnavbar">
        <Link className="mobnavlink" to="/">
          Home
        </Link>
        <Link className="mobnavlink" to="/hiring">
          Hiring/Internships
        </Link>
        <Link className="mobnavlink" to="/coupons">
          Course Coupons
        </Link>
        <Link className="mobnavlink" to="/roles">
          Job Roles
        </Link>
        <Link className="mobnavlink" to="/admin">
          Admin Login
        </Link>
        
      </div>
    );
  }
}
