import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import List from "./ListProperty";

class Profil extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-4">
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
              <List />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profil;
