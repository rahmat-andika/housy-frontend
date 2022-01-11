import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import List from "../components/ListOrder";

class Profil extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-2">
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb bg-white pl-0">
              <li className="breadcrumb-item active" aria-current="page">
                Profile
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <Profile />
            </div>
            <div className="col">
              <h5>Latest Booking</h5>
              <List />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profil;