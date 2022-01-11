import React from "react";

import { connect } from "react-redux";
import { getUsers } from "../_actions/user";

import { Profiles } from "./Loader";

import email from "../assets/img/email.svg";
import tenant from "../assets/img/tenant.svg";
import gender from "../assets/img/gender.svg";
import phone from "../assets/img/phone.svg";
import address from "../assets/img/address.svg";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { data: userData, loading, error } = this.props.users;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <Profiles />;
    return (
      <>
        {userData && (
          <>
            <div className="d-flex align-items-center mb-4">
              <img
                style={{ height: 100, width: 100 }}
                className="rounded-circle mr-3"
                src={
                  "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"
                }
                alt="..."
              />
              <div>
                <h4>{userData.fullName}</h4>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={email} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{userData.email}</p>
                <small>Email</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={tenant} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{userData.role}</p>
                <small>Status</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={gender} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{userData.gender}</p>
                <small>Gender</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={phone} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{userData.phone}</p>
                <small>Phone Number</small>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="mr-2">
                <img src={address} alt=".." />
              </div>
              <div>
                <p className="bold mb-0">{userData.address}</p>
                <small>Address</small>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);