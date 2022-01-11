import React, { Component } from "react";
import SignIn from "./SignInModals";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import { API, setAuthToken } from "../../config/api";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router-dom";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      loading: false,
      status: null,
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    const auth = localStorage.getItem("auth");
    this.setState({ status: auth });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { house, price } = this.props;
    const order = this.state;
    const chk = order.startDate;
    const post = {
      checkin: moment(chk).format("DD-MM-YYYY"),
      checkout: moment(chk)
        .add(1, "years")
        .format("DD-MM-YYYY"),
      houseId: house,
      total: price,
      status: "Waiting Payment",
      attachment: "bca.jpg"
    };

    API.post("/order", post, setAuthToken(localStorage.getItem("token"))).then(
      res => {
        if (res.status === 201) {
          this.setState({ success: true, loading: false, id: res.data.data.id });
        }
      }
    );
  };

  render() {
    const loading = this.state.loading;

    if(this.state.success) {
      return <Redirect to={`/booking/${this.state.id}`} />
    }

    return (
      <div>
        {!this.state.status ? (
          <SignIn {...this.props} />
        ) : (
          <Modal {...this.props}>
            <div className="text-center p-3">
              <h3 className="pt-3">How long you will stay</h3>
            </div>

            <div className="px-4 pt-0 pb-4">
              <div className="form-group">
                <label className="bold">Check In</label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  className="date-box w-100"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  name="startDate"
                />
              </div>
              <button onClick={this.handleSubmit} className="btn-modal">
                {loading && <div className="btn-loader"></div>}
                {!loading && <span>Order</span>}
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Booking;
