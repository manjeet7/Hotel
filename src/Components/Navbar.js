import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handletoggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(document.getElementById("radha").className);
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handletoggle}
            >
              <FaAlignRight className="nav-icons" />
            </button>
          </div>
          <ul
            id="radha"
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Room">Room</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}