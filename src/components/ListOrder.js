import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BookingLoad } from "./Loader";

import { connect } from "react-redux";
import { getOrders } from "../_actions/order";

class List extends Component {
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
    const { data: orders, loading, error } = this.props.orders;
    if (error) return <>Error</>;
    if (loading) return <BookingLoad />;

    return (
      <>
        {orders &&
          orders.length > 0 &&
          orders.map((order, i) => (
            <div key={i} className="mb-3">
              <Link to={`/booking/${order.id}`}>
                <div className="card border-0 shadow p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="bold mb-0">{order.house.name}</p>
                      <small>{order.createdAt}</small>
                    </div>
                    <div className={`badge badge-${this.badge(order.paid)}`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
