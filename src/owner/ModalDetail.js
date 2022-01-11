import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import logo from "../assets/img/icon.svg";
import QRCode from "qrcode.react";
import { connect } from "react-redux";
import { approve } from "../_actions/order";

class Detail extends Component {
  handleClick = () => {
    const { data: orderData } = this.props.detail;
    const id = orderData.id;

    const data = {
      status: "Approved"
    };
    this.props.approve(id, data);
  };

  render() {
    const { data: orderData, loading, error } = this.props.detail;

    if (error) return <>Error</>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {orderData && orderData.house && (
          <div className="pt-3 p-2 mb-3">
            <div className="d-flex px-3 justify-content-between align-items-top">
              <img
                style={{ width: "100px", height: "40px" }}
                src={logo}
                alt=".."
              />
              <div className="text-right">
                <h5 className="mb-0">INVOICE</h5>
                <p className="text-muted mb-2">
                  <small>{orderData.createdAt}</small>
                </p>
              </div>
            </div>
            <Row>
              <Col lg={4} md={12} sm={12} className="mb-3">
                <div className="p-3">
                  <h4>{orderData.house.name}</h4>
                  <p className="small mb-0">{orderData.house.address}</p>
                  <div className="mt-3 bold badge badge-success">
                    {orderData.status}
                  </div>
                </div>
              </Col>
              <Col lg={5} md={12} sm={12} className="p-0">
                <div className="p-3 timeline-wrapper">
                  <ul className="StepProgress">
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-in</div>
                          <div>{orderData.checkin}</div>
                        </div>
                        <div>
                          <div className="bold">Amenities</div>
                          <div>
                            {orderData.house.amenities.map((amn, i) => (
                              <small key={i}>{amn}, </small>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-out</div>
                          <div>{orderData.checkout}</div>
                        </div>
                        <div>
                          <div className="bold">Type of Rent</div>
                          <div>{orderData.house.typeRent}</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="p-3">
                  <div className="text-center">
                    <div>
                      <QRCode
                        size={256}
                        style={{ height: "80px", width: "80px" }}
                        value={orderData.createdAt}
                      />
                    </div>
                    <h4 className="mt-3">TYE938</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="px-3">
              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{orderData.user.fullName}</td>
                    <td>{orderData.user.gender}</td>
                    <td>{orderData.user.phone}</td>
                    <td>
                      Long time rent :
                      <b className="text-danger float-right">
                        1 {orderData.house.typeRent}
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      Total :
                      <b className="text-danger float-right">
                        {orderData.total}
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="float-right d-flex">
                <Button
                  variant="danger"
                  className="mr-2 btn-sm bold"
                  onClick={this.props.onHide}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="bold"
                  onClick={this.handleClick}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.detailOrder,
    order: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approve: (id, data) => dispatch(approve(id, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
