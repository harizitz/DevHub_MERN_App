import React from "react";
import "./Admin.css";
import { useState } from "react";
export default function Admin() {
  const [username, setusername] = useState();
  const [pass, setpass] = useState();
  const Onchangeuser = (e) => {
    setusername(e.target.value);
  };
  const Onchangepass = (e) => {
    setpass(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log(username + pass);
    if (username === "admin" && pass === "1234") {
      window.location.href = "/filldetail";
    } else {
      alert("Invalid Admin username or Password");
    }
  };
  return (
    <div className="login-box">
      <h2>Admin Login</h2>
      <form>
        <div className="user-box">
          <input onChange={Onchangeuser} type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input onChange={Onchangepass} type="password" name="" required="" />
          <label>Password</label>
        </div>
        <button onClick={Submit}>Submit</button>
      </form>
    </div>
  );
}
