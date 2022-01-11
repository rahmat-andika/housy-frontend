import React, { Component } from "react";
import search from "../assets/img/search.svg";
import Detail from "./ModalDetail";
import Navbar from "../components/Navbar";

import { connect } from "react-redux";
import { getOrders } from "../_actions/order";
import { getDetailOrder } from "../_actions/detail-order";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle = e => {
    this.props.getDetailOrder(e.target.id);
    this.setState({ open: true });
  };

  onHide = () => {
    this.setState({ open: !this.state.open })
  }

  componentDidMount() {
    this.props.getOrders();
  }

  badge = id => {
    if (id === 0) {
      return "danger";
    }
    if (id === 1) {
      return "primary";
    }
    if (id === 2) {
      return "success";
    }
  };

  render() {
    const { data: orderData, loading, error } = this.props.orders;
    if (error) return <>Error</>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );

      console.log(orderData)

    return (
      <>
        <Navbar />
        <Detail
          data={orderData && orderData.id && " "}
          show={this.state.open}
          onHide={this.onHide}
        />
        <div className="container py-3">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Type of Rent</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.length > 0 &&
                orderData.map((order, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.user.fullName}</td>
                    <td>{order.house.typeRent}</td>
                    <td>{order.attachment}</td>
                    <td>
                      <div className={`badge badge-${this.badge(order.paid)}`}>
                        {order.status}
                      </div>
                    </td>
                    <td>
                      <img
                        style={{ cursor: "pointer", width: 17 }}
                        id={order.id}
                        onClick={this.toggle}
                        src={search}
                        alt=".."
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    detail: state.detailOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders()),
    getDetailOrder: id => dispatch(getDetailOrder(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
