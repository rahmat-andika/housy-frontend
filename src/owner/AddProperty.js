import React from "react";
import { Link } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Swal from "sweetalert2";

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        amenities: []
      },
      loading: false
    };
  }

  handleSelect = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleCheck = e => {
    const check = this.state.data.amenities;

    console.log(check);
    const value = e.target.value;
    const arr = check.includes(value);

    if (arr) {
      check.splice(check.indexOf(value), 1);
    } else {
      check.push(value);
    }
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleSubmit = e => {
    this.setState({ loading: true });
    API.post(
      "/house",
      this.state.data,
      setAuthToken(localStorage.getItem("token"))
    ).then(res => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Your Property has been saved",
          showConfirmButton: true,
          allowOutsideClick: false,
          onClose: () => {
            this.props.history.push("/profile");
          }
        });
      }
    });

    e.preventDefault();
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <Navbar />
        <div className="container py-3">
          <nav aria-label="breadcrumb" role="navigation">
            <ol className="breadcrumb bg-white pl-0">
              <li className="breadcrumb-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Property
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <Profile />
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header bg-transparent bold">
                  Add Property
                </div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-control-label bold">
                        Property Name
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.name || ""}
                        name="name"
                        className="forms"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="form-control-label bold">
                        City
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.city || ""}
                        name="city"
                        className="forms"
                        type="text"
                        id="city"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="address"
                        className="form-control-label bold"
                      >
                        Address
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.address || ""}
                        name="address"
                        className="forms"
                        type="text"
                        id="address"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="typeRent"
                            className="form-control-label bold"
                          >
                            Type of Rent
                          </label>
                          <select
                            onChange={this.handleSelect}
                            defaultValue={"select"}
                            name="typeRent"
                            id="typeRent"
                            className="forms"
                          >
                            <option value="select" disabled>
                              Select Type
                            </option>
                            <option value="day">Day</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor="price"
                            className="form-control-label bold"
                          >
                            Price
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.price || ""}
                            name="price"
                            className="forms"
                            type="number"
                            id="price"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="amenities"
                        className="form-control-label bold"
                      >
                        Amenities
                      </label>
                      <div className="d-flex" id="amenities">
                        <div className="custom-control custom-checkbox mr-3">
                          <input
                            onChange={this.handleCheck}
                            value="Furnished"
                            className="custom-control-input"
                            id="furnished"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="furnished"
                          >
                            Furnished
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mr-3">
                          <input
                            onChange={this.handleCheck}
                            value="Pet Allowed"
                            className="custom-control-input"
                            id="pets"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="pets"
                          >
                            Pets Allowed
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            onChange={this.handleCheck}
                            value="Shared Accomodation"
                            className="custom-control-input"
                            id="shared"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="shared"
                          >
                            Shared Accomodation
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            htmlFor="bedroom"
                            className="form-control-label bold"
                          >
                            Bedroom
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.bedroom || ""}
                            name="bedroom"
                            className="forms"
                            type="number"
                            id="bedroom"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            htmlFor="bathroom"
                            className="form-control-label bold"
                          >
                            Bathroom
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.bathroom || ""}
                            name="bathroom"
                            className="forms"
                            type="number"
                            id="bathroom"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label
                            htmlFor="area"
                            className="form-control-label bold"
                          >
                            Area (Ft)
                          </label>
                          <input
                            required
                            onChange={this.handleChange}
                            value={data.area || ""}
                            name="area"
                            autoComplete="off"
                            className="forms"
                            type="number"
                            id="area"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="images"
                        className="form-control-label bold"
                      >
                        Images URL
                      </label>
                      <div id="images">
                        <input
                          required
                          onChange={this.handleChange}
                          value={data.images || ""}
                          name="images"
                          autoComplete="off"
                          className="forms"
                          type="text"
                          id="images"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="form-control-label bold"
                      >
                        Description
                      </label>
                      <textarea
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.description || ""}
                        name="description"
                        id="description"
                        className="textareas"
                      />
                    </div>

                    <div className="mt-3 float-right d-flex">
                      <Link to="/profile">
                        <button type="button" className="btn btn-danger mr-3">
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <div className="btn-loader"></div>
                        )}
                        {!this.state.loading && <span>Save</span>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProperty;
