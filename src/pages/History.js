import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

class History extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-2">
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb bg-white pl-0">
              <li className="breadcrumb-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                History
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <Profile />
            </div>
            <div className="col">
              <h5>History Transactions</h5>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default History;
