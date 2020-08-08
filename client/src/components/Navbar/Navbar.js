import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/hiring">
          Hiring/Internships
        </Link>
        <Link className="navlink" to="/coupons">
          Course Coupons
        </Link>
        <Link className="navlink" to="/roles">
          Job Roles
        </Link>
        <Link className="adminlink" to="/admin">
          ADMIN LOGIN
        </Link>
      </div>
    );
  }
}
