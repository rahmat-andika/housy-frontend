import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import cabin from "../../assets/img/cabin.svg";
import calendar from "../../assets/img/calendar.svg";
import logout from "../../assets/img/logout.svg";
import profile from "../../assets/img/profile.svg";

export default class Owner extends Component {
  state = {
    logout: false
  };

  handleSignOut = () => {
    localStorage.clear();
    this.setState({ logout: !this.state.logout });
  };

  render() {
    if (this.state.logout) {
      window.location.href = "/";
    }

    return (
      <div>
        <Dropdown onSelect={() => null}>
          <Dropdown.Toggle
            className="nav-link dropdown-toggle user-action p-0 mr-0"
            style={{ borderRadius: "45px" }}
          >
            <img
              src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
              className="avatar"
              style={{ height: "35px", width: "35px", borderRadius: "45px" }}
              alt="Avatar"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-right mt-3">
            <Link to="/profile" className="dropdown-item">
              <img className="dropdown-icon" src={profile} alt=".." />
              Profile
            </Link>
            <Link to="/profile/add" className="dropdown-item">
              <img className="dropdown-icon" src={cabin} alt=".." />
              Add Property
            </Link>
            <Link to="/profile/history" className="dropdown-item">
              <img className="dropdown-icon" src={calendar} alt=".." />
              History
            </Link>
            <div className="divider"></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={this.handleSignOut}
              className="dropdown-item"
            >
              <img className="dropdown-icon" src={logout} alt=".." />
              Logout
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
