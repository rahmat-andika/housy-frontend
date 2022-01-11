import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailHouse } from "../_actions/detail-house";

import Navbar from "../components/Navbar";
import Currency from "react-currency-format";
import { Row, Col } from "shards-react";
import Booking from "../components/modals/BookingModal";

import bed from "../assets/img/bed.svg";
import bathroom from "../assets/img/bathroom.svg";

class Detail extends Component {
  state = {
    data: {},
    load: false,
    open: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const {
      match: { params }
    } = this.props;

    this.props.getDetailHouse(params.id);
  }

  order = () => {
    this.setState({ open: !this.state.show });
  };

  render() {
    const { data: houseData, loading, error } = this.props.detail;

    if (error) return <h1>There's unknown error</h1>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );

    return (
      <>
        <Navbar />
        <Booking
          price={houseData.price}
          house={houseData.id || ""}
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        <div className="container py-2">
          {houseData && (
            <div>
              <Row className="px-0 pt-3">
                <Col lg={6} className="mb-3">
                  <div>
                    <div
                      className="productx sliderlanding"
                      style={{
                        backgroundImage: `url(${houseData.images})`,
                        borderRadius: 12
                      }}
                    ></div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <h3>House {houseData.name}</h3>

                    <div className="d-flex justify-content-between align-items-top">
                      <div className="mr-0">
                        <h5 className="bold">
                          <Currency
                            value={houseData.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp "}
                          />
                          / {houseData.typeRent}
                        </h5>
                        <div>
                          <p className="small text-muted mb-3">
                            {houseData.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="mr-3">
                        <p className="small bold mb-1">Bedrooms</p>
                        <h5>
                          {houseData.bedroom}
                          <img className="ml-2 icons" src={bed} alt=".." />
                        </h5>
                      </div>
                      <div className="mr-3">
                        <p className="small bold mb-1">Bathrooms</p>
                        <h5>
                          {houseData.bathroom}
                          <img className="ml-2 icons" src={bathroom} alt=".." />
                        </h5>
                      </div>
                      <div>
                        <p className="small bold mb-1">Area</p>
                        <h5>{houseData.area} ft</h5>
                      </div>
                    </div>

                    <div>
                      <h5>Description</h5>
                      <p>{houseData.description}</p>
                    </div>

                    <div className="float-right">
                      <button onClick={this.order} className="btn-apply">
                        Book Now
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.detailHouse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailHouse: id => dispatch(getDetailHouse(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
