import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouseList } from "../_actions/house";

import { House } from "../components/Loader";

import { Row, Col } from "shards-react";
import Currency from "react-currency-format";

class Home extends Component {
  componentDidMount() {
    this.props.getHouseList();
  }

  render() {
    const { data: houseData, loading, error } = this.props.house;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <House/>;

    return (
      <>
        <Row>
          {houseData && houseData.length > 0
            ? houseData.map(housy => (
                <Col lg={4} className="p-2" key={housy.id}>
                  <Link to={`/detail/${housy.id}`}>
                    <div className="house-list p-2">
                      <div className="detail">
                        <div className="category p-2">
                          {housy.amenities.map((data, i) => (
                            <div key={i} className="badge badge-white mr-2 mb-2">
                              {data}
                            </div>
                          ))}
                        </div>

                        <img
                          className="house-img w-100 mb-2"
                          src={housy.images}
                          alt=""
                        />
                        <p className="bold mb-0">
                          <Currency
                            value={housy.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp "}
                          />
                          / {housy.typeRent}
                        </p>
                        <small className="">
                          {housy.bedroom} Beds, {housy.bathroom} Baths,
                          {housy.area} ft
                        </small>
                        <br />
                        <small className="text-dark">{housy.city}</small>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))
            : null}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    house: state.house
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHouseList: () => dispatch(getHouseList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
