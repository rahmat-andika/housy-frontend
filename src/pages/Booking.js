import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Confirmation from "../components/modals/ConfirmationModal";
import Booking from "../components/Booking";
import { connect } from "react-redux";
import { payOrder } from "../_actions/detail-order";
import Swal from "sweetalert2";

class Bookings extends Component {
  state = {
    open: false,
    paid: false
  };

  handlePay = () => {
    const {
      match: { params }
    } = this.props;
    const data = {
      paid: 1,
      status: "Waiting Approve"
    };

    // PATCH DATA TO SERVER
    this.props.payOrder(params.id, data);
    const { data: success } = this.props.order;
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Your Order Has Been Placed",
        showConfirmButton: true,
        allowOutsideClick: false
      });
    }
  };

  render() {
    const {
      match: { params }
    } = this.props;
    const data = this.props.order.data;
    const loading = this.props.order.loading;

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
                Booking
              </li>
            </ol>
          </nav>
          <div className="row">
            <Confirmation
              show={this.state.open}
              onHide={() => this.setState({ open: !this.state.open })}
            />

            <div className="col-lg-9">
              <Booking data={params.id} />
            </div>
            {data && (
              <div className="col">
                {data.paid < 1 ? (
                  <button
                    disabled={loading}
                    className="btn btn-primary btn-block"
                    onClick={this.handlePay}
                  >
                    {loading && <div className="btn-loader"></div>}
                    {!loading && <span>PAY</span>}
                  </button>
                ) : (
                  <div className="card text-center p-2 mb-3">
                    <h5 className="m-0 text-uppercase">{data.status}</h5>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { order: state.detailOrder };
};

const mapDispatchToProps = dispatch => {
  return {
    payOrder: (id, data) => dispatch(payOrder(id, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
