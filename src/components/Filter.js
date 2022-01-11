import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import { connect } from "react-redux";
import { getHouseList } from "../_actions/house";

import "react-datepicker/dist/react-datepicker.css";

class Filter extends Component {
  state = {
    startDate: new Date(),
    budget: 0,
    type: ""
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleBudget = (e) => {
    this.setState({budget: e.target.value});
  }

  onChange = value => {
    this.setState({ type: value });
    console.log(value)
  };

  render() {
    return (
      <>
        <Form>
          <div className="mb-2">
            <p>Type of Rent</p>
            <ToggleButtonGroup
              type="radio"
              name="options"
              onChange={this.onChange}
              value={this.state.type}
            >
              <ToggleButton className="btn-rent mr-btn" value="day">
                Day
              </ToggleButton>
              <ToggleButton className="btn-rent mr-btn" value="month">
                Month
              </ToggleButton>
              <ToggleButton className="btn-rent" value="year">
                Year
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="mb-3">
            <p>Date</p>
            <DatePicker
              className="date-box"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-2">
            <p>Property Room</p>
            <div className="property mb-2">
              <p>Bedroom</p>
              <ToggleButtonGroup
                type="radio"
                name="options"
                onChange={this.onChange}
              >
                <ToggleButton className="btn-prop mr-btn-prop" value={"1"}>
                  1
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"2"}>
                  2
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"3"}>
                  3
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"4"}>
                  4
                </ToggleButton>
                <ToggleButton className="btn-prop" value={"5"}>
                  5+
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            <div className="property">
              <p>Bathroom</p>
              <ToggleButtonGroup
                type="radio"
                name="options"
                onChange={this.onChange}
              >
                <ToggleButton className="btn-prop mr-btn-prop" value={"1"}>
                  1
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"2"}>
                  2
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"3"}>
                  3
                </ToggleButton>
                <ToggleButton className="btn-prop mr-btn-prop" value={"4"}>
                  4
                </ToggleButton>
                <ToggleButton className="btn-prop" value={"5"}>
                  5+
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>

          <div className="amenities mb-2">
            <p>Amenities</p>
            <div className="d-flex justify-content-between mb-0">
              <small className="bold text-muted mb-0">Furnished</small>
              <label>
                <input className="checkbox" type="checkbox" value="check1" />
              </label>
            </div>

            <div className="d-flex justify-content-between mb-0">
              <small className="bold text-muted mb-0">Pet Allowed</small>
              <label>
                <input className="checkbox" type="checkbox" value="check1" />
              </label>
            </div>

            <div className="d-flex justify-content-between">
              <small className="bold text-muted mb-0">
                Shared Accomodation
              </small>
              <label>
                <input className="checkbox" type="checkbox" value="check1" />
              </label>
            </div>
          </div>

          <div className="mb-2">
            <p>Budget</p>
            <div className="d-flex align-items-center justify-content-between">
              <small className="bold mr-3">Less than IDR</small>
              <input value={this.state.budget} onChange={this.handleBudget} className="form-box" placeholder="0" />
            </div>
          </div>
          <button className="mt-3 btn-apply float-right">APPLY</button>
        </Form>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getHouseList: (param) => dispatch(getHouseList(param))
  };
};

export default connect(mapDispatchToProps)(Filter);
