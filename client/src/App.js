import React from "react";
import "../src/App.css";
import { Link } from "react-router-dom";
import logo from "./assets/LOGO.png";
import Mobnavbar from "../src/components/Mobnavbar/Mobnavbar";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import Hiring from "../src/components/Hiring/Hiring";
import Coupons from "../src/components/Coupons/Coupons";
import Roles from "../src/components/Roles/Roles";
import Admin from "../src/components/Admin/Admin";
import ReadData from "../src/components/ReadData/ReadData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [ismobile, setismobile] = useState(false);
  const callnav = () => {
    setismobile(!ismobile);
  };
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          {ismobile ? <Mobnavbar /> : null}
          <span onClick={callnav} className="navdrawer">
            &#9776;
          </span>

          <Navbar />
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/hiring" component={Hiring} />
          <Route path="/coupons" component={Coupons} />
          <Route path="/roles" component={Roles} />
          <Route path="/admin" component={Admin} />
          <Route path="/filldetail" component={ReadData} />
        </div>
      </Router>
    </div>
  );
}

export default App;
